"use strict!";
var http = require("http");
var url = require("url");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    var urlRequest = url.parse(req.url, true).query;
    res.write(urlRequest.name + " : " + urlRequest.password);
    res.end();
}).listen(8080);