var express = require('express');
var ytdl = require('ytdl-core');
var router = express.Router();

module.exports = function () {

  router.get('/', function (req, res) {
    var url = req.query.url;
    var secret = req.query.secret;
    if (secret === process.env.SECRET && url) {
      ytdl.getInfo(url, function (err, info) { 
        res.send(info);
      });
    } else {
      res.send('Missing URL or Key');
    }
  });

  return router;

}