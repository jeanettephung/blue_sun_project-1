var http = require('http');
var express = require("express");
var app     = express();
var path    = require("path");

/*http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8124, "127.0.0.1");*/

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});


app.listen(3000);

console.log("Running at Port 3000");


//console.log('Server running at http://127.0.0.1:8124/');
