import fs from "fs";
import puppeteer from "puppeteer";
import { startExpress } from "./includes/expressManager.js";
import { injectDataToTemplate } from "./includes/functions.js";
import { renderHtmlToPdf } from "./includes/pdfManager.js";

const app = startExpress();
let browser = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'], headless: true });

// ---------------------------------------------------------------------------------------------
async function prepare_pdf(data) {
  const htmlDataArray = [
    { key: "_____ARG_HOST_____", value: 'http://localhost:5000' },
    { key: "_____ARG_DATA_____", value: JSON.stringify(data.data) },
  ];
  const html = await injectDataToTemplate( "templates/index.html", htmlDataArray );
  const pdf = await renderHtmlToPdf( browser, html);
  if (pdf === false) { return false }
  return pdf;
}
// ---------------------------------------------------------------------------------------------
app.get("/", async (req, res) => { res.end('ok'); });
// ---------------------------------------------------------------------------------------------
app.post("/download", async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) { res.status(400); res.end('Invalid'); return false; } // check for input
    const pdfBytes = await prepare_pdf(req.body); // generate pdf
    if (pdfBytes === false) { res.status(400); res.end('Timeout'); return false; } // handle timeout
    res.end(pdfBytes);
  } catch (error) {
    res.end('Fatal Error' + error.toString());
  }
});
// ---------------------------------------------------------------------------------------------

// check for browser disconnect / crash
browser.on('disconnected', async () => {
  await browser.close();
  await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'], headless: true });
})

// close pupeteer on exit
process.on("exit", async () => { await browser.close(); });
process.on("SIGINT", async () => { await browser.close(); });
process.on("SIGUSR1", async () => { await browser.close(); });
process.on("SIGUSR2", async () => { await browser.close(); });
process.on("uncaughtException", async () => { await browser.close(); });