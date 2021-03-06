var express = require ('express'), 
    http    = require ('http'); 

var app = express();
var httpport = process.env.port || 3005;

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

app.get('/privacypolicy_termsofservice', function(req, res){
  res.sendfile(__dirname + '/public/html/privacytos.html');
});

app.get ('/support', function(req, res){
  res.sendfile(__dirname + '/public/html/support.html');
});
