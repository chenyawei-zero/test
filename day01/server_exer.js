const http = require('http');
const server = http.createServer();
const url = require('url');
const fs = require('fs');
const mime = require('mime');
const path = require('path');

server.listen('8900', function () {
    console.log('监听')
});

server.on('request', function (req, res) {
    const urlObj = url.parse(req.url, true),
        param = urlObj.query;
    let pathname = urlObj.pathname;
    if (pathname === '/') {
        pathname = '/index.html';
    }

    if(pathname.indexOf('/php') === 0) {
        pathname += '.js';
        // 处理请求接口 todo
    } else if (!mime.getType(pathname)) {
        pathname += '.html';
    }

    res.setHeader('Content_Type', mime.getType(pathname));
    fs.readFile(path.join(__dirname, pathname), function (err, data) {
        if (err) {
            res.statusCode('404');
            res.statusMessage('No Found');
            res.end();
        } else {
            res.end(data);
        }
    })
});