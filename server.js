var express = require ('express'), 
    http    = require ('http'), 
    https   = require('https'),
    fbgraph = require ('fbgraph'),
    app = require(__dirname + '/app/app.js');

var app = express();
var httpport = process.env.port || 3005;
// var httpsport = 4001;

var server = app.listen(httpport, function() {
    console.log('Listening on port %d', '|', server.address().port, '|' + typeof(server.address().port));
    console.log('process.env.port', process.env.port);
});

// Serve up content from public directory
app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


// get request handlers
app.get('/', function(req, res) {
  res.sendfile(__dirname + '/public/html/index.html');
});
// app.get('/bower_components/bootstrap/dist/css/bootstrap.min.css', function(req, res){
//   console.log('trying to get bootstrap.min.css');
//   res.sendfile(__dirname + '/bower_components/bootstrap/dist/css/bootstrap.min.css');
// });
// app.get('/bower_components/bootstrap/dist/js/bootstrap.min.js', function(req, res){
//   console.log('trying to get bootstrap.min.js');
//   res.sendfile(__dirname + '/bower_components/bootstrap/dist/js/bootstrap.min.js');
// });

//****************** Begin FB graph stuff ***********//
