var http = require('http');
var server = http.createServer();

server.listen(8888, function () {
    console.log('监听端口')
});

server.on('request', function (request, response) {

    console.log(request.url)  // 请求地址
    console.log(request.headers)  // 请求头
    console.log(request.rawHeaders) // 请求头数组
    console.log(request.httpVersion)  // http协议版本号
    console.log(request.method) // 请求方式
})