var express = require('express');
var x = require('../public/javascripts/testLib');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', greet:x.sayHello('boo') });
});

module.exports = router;
