// var express = require ('express');

// var app = express();


// app.get('/', function(req, res){
//   res.sendfile('/Users/Richard/Github/sandbox/html/index.html');
// });


var express = require ('express');

var app = express();
var port = 3000;

// Serve up content from public directory
app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// app.listen(port, function(){
//   console.log('Listening on port %d', server.address().port);
// });

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});


// handle requests by url
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/html/index.html');
});