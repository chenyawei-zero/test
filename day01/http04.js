var http = require('http');
var server = http.createServer();

server.listen(8888, function () {
    console.log('监听端口')
});

server.on('request', function (request, response) {

    console.log(request.url)
})