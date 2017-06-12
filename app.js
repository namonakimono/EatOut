var express = require('express');
var http = require('http');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 8082);
app.use(express.static(path.join(__dirname, '.')));

app.get('/', function (req, res) {
   res.render("index.html");
});


// exports.index = function(req, res){
//   res.render("index.html");
// };


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// app.listen(8082, function () {
//   console.log('Example app listening on port 8082!');
// });
