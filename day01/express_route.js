const express = require('express');
const bodyparser = require('body-parser');
const app = express();

// 静态资源托管
app.use(express.static('static'));


app.listen(8888, function() {

})
