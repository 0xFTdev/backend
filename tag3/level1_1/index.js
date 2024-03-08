import http from "node:http";
import fs from "node:fs";

const sendFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
    } else {
      res.end(data);
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    sendFile("./public/index.html", res);
  } else {
    sendFile(`./public${req.url}`, res);
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
