var express = require('express');
var request = require('request');

var app = express();

app.use('/load', function(req, res){
    var url = req.url.replace('/?url=', '');

    console.log(url);

    req.pipe(request(url)).pipe(res)
})

app.listen(3000)

console.log("execute");