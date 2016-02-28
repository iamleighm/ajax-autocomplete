var express = require('express'),
  fs        = require('fs'),
  router    = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {

  // render a jade file from views/ folder, in this case index.jade
  res.render('index', { title: 'Coder Forge - Ajax Autocomplete' });
});

module.exports = router;
