const express = require('express');
const ytdl = require('ytdl-core');
const router = express.Router();

module.exports = function () {

  router.get('/', function (req, res) {
    const url = req.query.url;
    const secret = req.query.secret;
    if (secret === process.env.SECRET && url) {
      ytdl.getInfo(url, function (err, info) {
        if (err) res.status(500).send(err);
        res.json(info);
      });
    } else {
      res.send('Missing URL or Key');
    }
  });

  return router;

}