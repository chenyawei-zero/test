var http = require('http');
var server = http.createServer();
var queryString = require('querystring')

server.listen(8888, function () {
    console.log('监听端口')
});

server.on('request', function (request, response) {
    // 获取参数
    if(request.url.indexOf('?') != -1) {
        let param = queryString.parse(request.url.split('?')[1])
    }
})