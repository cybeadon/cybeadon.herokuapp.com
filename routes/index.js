const cors = require('cors');

module.exports = function (app) {

  const corsOptions = {
    origin: /\.cybeadon\.com$/,
    optionsSuccessStatus: 200
  }

  app.use(cors(process.env.NODE_ENV === "production" ? corsOptions : {}));

  app.get('/', function (req, res) {
    res.send('Welcome to Cybeadon');
  });

  app.use('/stream', require('./stream')());

  app.use('/ytube', require('./ytube')());

}