var http = require('http');
var server = http.createServer();

server.listen(8888, function () {
    console.log('监听端口')
});

server.on('request', function (request, response) {
    response.setHeader('content-type', 'test/html;charset=itf-8');
    response.write('<h1>哈哈哈</h1>');

    response.end('OK');
})