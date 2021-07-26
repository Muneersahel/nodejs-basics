const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    /* Serving html File */
    const readStream = fs.createReadStream("./static/index.html");
    res.writeHead(200, { "Content-type": "text/html" });
    readStream.pipe(res);

    /* Serving json file */
    const readStream = fs.createReadStream("./static/example.json");
    res.writeHead(200, { "Content-type": "application/json" });
    readStream.pipe(res);

    /* Serving image file */
    const readStream = fs.createReadStream("./static/example.jpg");
    res.writeHead(200, { "Content-type": "image/jpg" });
    readStream.pipe(res);
  })
  .listen("3000");
