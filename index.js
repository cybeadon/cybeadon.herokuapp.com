var express = require('express');
var request = require('request');

var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res) {
  res.send('Welcome to Cybeadon');
});

app.get('/rd', function(req, res){
  var url = req.query.url;
  var secret = req.query.secret;
  if(secret === process.env.SECRET){
    request(url).pipe(res);
  }else{
    res.send('Invalid Key');
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});