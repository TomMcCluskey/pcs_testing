var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Super Awesome Homework Tester' });
});

module.exports = router;
