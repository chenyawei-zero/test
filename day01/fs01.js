var fs = require('fs');

fs.writeFile('静夜思.txt', '床前明月光', 'utf8', function (e) {
    if(e) {
        console.log(e)
    } else {
        console.log('正确')
    }
})