var http = require('http');
var server = http.createServer();
var queryString = require('querystring');

server.listen(8888, function () {
    console.log('监听端口')
});

server.on('request', function (request, response) {
    // 获取参数
    let bufferList = [];
    request.on('data', function(chunk) {
        bufferList.push(chunk)
    })
    request.on('end', function () {
        var result = Buffer.concat(bufferList);
        var param = queryString.parse(result.toString());
    })
})