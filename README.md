
This Node.js application combines Puppeteer, ExpressJS, Vue.js, and Tailwind CSS to create a web server that supports user input via a POST API call, generates PDF pages based on that input, and returns the PDF in Blob format in the response. The application is also dockerized, allowing you to create a Docker image based on the Dockerfile included in the project directory.

## Features
- Developer-friendly
- Generates PDF pages based on user input
- Utilizes Puppeteer for PDF generation
- Incorporates Vue.js for dynamic templating
- Styled with Tailwind CSS for a modern look and feel

## Installation
1. Clone the repository: `git clone [https://github.com/omid-aghaei/node-pdf-generator.git](https://github.com/omid-aghaei/node-pdf-generator.git)`
2. Install dependencies: `yarn install`
3. Start the server: `node index.js`

## Usage
1. Host application on your server.
2. Use the POST API call to send user input content.
3. The server will generate a PDF page based on the input.
4. The PDF will be returned in Blob format in the response.

## Docker
1. Build the Docker image: `docker build -t node-pdf-generator .`
2. Run the Docker container: `docker run -p 5000:5000 node-pdf-generator`
3.
## Dependencies
- Puppeteer: [Link to Puppeteer]([https://github.com/puppeteer/puppeteer](https://github.com/puppeteer/puppeteer))
- ExpressJS: [Link to ExpressJS]([https://github.com/expressjs/express](https://github.com/expressjs/express))
- Vue.js: [Link to Vue.js]([https://github.com/vuejs/vue](https://github.com/vuejs/vue))
- Tailwind CSS: [Link to Tailwind CSS]([https://github.com/tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss))

## Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature`
5. Submit a pull request

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.