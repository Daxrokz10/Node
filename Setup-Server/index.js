const http = require('http');
const fs = require('fs');
const path = require('path'); // Add this
const PORT = 6969;

const requestHandler = (req, res) => {
    let filename = '';

    switch (req.url) {
        case '/':
            filename = "index.html";
            break;
        case '/about':
            filename = "about.html";
            break;
        case '/contact':
            filename = "contact.html";
            break;
        default:
            filename = "404.html";
            statusCode = 404;
            break;
    }

    const filePath = path.join(__dirname, filename);

    fs.readFile(filePath, (err, result) => {
        res.setHeader('Content-Type', 'text/html');
        if (err) {
            
        } else {
            res.end(result);
        }
    });
};

const server = http.createServer(requestHandler);

server.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Server online on: ", PORT);
    }
});