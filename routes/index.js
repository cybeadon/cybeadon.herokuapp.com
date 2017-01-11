module.exports = function (app) {

  app.get('/', function (req, res) {
    res.send('Welcome to Cybeadon');
  });

  app.use('/stream', require('./stream')());

  app.use('/youtube', require('./youtube')());

}