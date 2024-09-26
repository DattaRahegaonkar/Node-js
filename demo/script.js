// Creating Basic Server

// 1st API

const http = require('http');

// const data = require("./demo")

const fs = require('fs');

http.createServer( (request,response)=> {
    fs.readFile('index.html', (err,data)=> {
        response.writeHead(200,{'content-Type':'text/html'})
        response.write(data);
        response.end();

    })
}).listen(4200);

