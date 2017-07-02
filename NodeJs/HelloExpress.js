var express = require("express");
var app = express();
app.get('/', function(req, res) {
    res.send('Hello NodeJS');
})
app.listen(3000);
console.log("My Service is listening to port 3000.");