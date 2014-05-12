// var express = require ('express');

// var app = express();


// app.get('/', function(req, res){
//   res.sendfile('/Users/Richard/Github/sandbox/html/index.html');
// });


var express = require ('express');

var app = express();
var port = 3000;


// Serve up content from public directory
app.use(express.static('/Users/Richard/Github/sandbox/public'));
app.use(express.static('/Users/Richard/Github/sandbox/public/html'));
app.use(express.static('/Users/Richard/Github/sandbox/public/js'));
// app.use(express.static(__dirname + '/bower_components'));
app.use('/bower_components',  express.static('/Users/Richard/Github/sandbox/bower_components'));

// app.listen(port, function(){
//   console.log('Listening on port %d', server.address().port);
// });

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
// app.get('/', function(req, res){
//   res.sendfile('/Users/Richard/Github/sandbox/public/html/index.html');
// });