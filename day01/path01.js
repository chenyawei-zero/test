var fs = require('fs');
var path = require('path');

fs.writeFile(path.join(__dirname, 'file1', 'file2', 'file3', '静夜思.txt'), '床前明月光', 'utf8', function (e) {
    if(e) {
        console.log(e)
    } else {
        console.log('正确')
    }
})