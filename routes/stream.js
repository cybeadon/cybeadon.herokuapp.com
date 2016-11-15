var request = require('request');
var express = require('express');
var router = express.Router();

module.exports = function () {

  router.get('/', function (req, res) {
    var url = req.query.url;
    var secret = req.query.secret;
    if (secret === process.env.SECRET && url) {
      request(url).pipe(res);
    } else {
      res.send('Missing URL or Key');
    }
  });

  return router;

}