const request = require('request');
const express = require('express');
const router = express.Router();

module.exports = function () {

  router.get('/', function (req, res) {
    const url = req.query.url;
    const secret = req.query.secret;
    if (secret === process.env.SECRET && url) {
      request(url).pipe(res);
    } else {
      res.send('Missing URL or Key');
    }
  });

  return router;

}