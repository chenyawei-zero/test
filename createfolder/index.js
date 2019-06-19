#! node

let fs = require('fs');

fs.mkdir('./test', function (e) {
    if(!e) {
        console.log('创建文件夹成功')
    }
})