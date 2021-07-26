const http = require("http"); // http creates web server with nodejs
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello world from nodejs");
    res.end();
  } else {
    res.write("Some other routes");
    res.end();
  }
});

server.listen("3000");
