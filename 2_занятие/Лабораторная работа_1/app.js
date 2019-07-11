

var express = require('express');
var favicon = require('serve-favicon');
var path = require('path') ;
 
var app = express();
 
var faviconPath = path.join(__dirname, 'public/favicon.ico')
 
      console.log(faviconPath)
  app.use(favicon(faviconPath));
 
app.get('/', function (req, res) {
    console.log(req)
    console.log(res)
    res.send('Hello World!')
})
 
var server = app.listen(3000, function(){
    console.log('server is running at %s .', server.address().port);
});