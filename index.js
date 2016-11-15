var express = require('express');

var app = express();

app.set('port', (process.env.PORT || 5000));

require('./routes')(app);

//Not found error handling
app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});