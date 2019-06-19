const fs = require('fs');

fs.readFile('静夜思.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
    }
})