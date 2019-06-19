var http = require('http');
var server = http.createServer();
var url = require('url');

server.listen(8888, function () {
    console.log('监听端口')
});

server.on('request', function (request, response) {
    // 获取参数
    /*let urlObj = url.parse(request.url);
    console.log(urlObj.pathname) // 路径部分内容
    console.log(urlObj.query);  // 参数*/

    let urlObj = url.parse(request.url, true);
    console.log(urlObj.pathname) // 路径部分内容
    console.log(urlObj.query);  // 参数对象
})