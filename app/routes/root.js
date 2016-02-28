var express = require('express'),
  fs        = require('fs'),
  router    = express.Router(),
  sanitize  = require('mongo-sanitize')

/* GET home page. */
router.get('/', function getIndexCallback(req, res, next) {

  // render a jade file from views/ folder, in this case index.jade
  res.render('index', { title: 'Coder Forge - Ajax Autocomplete' });
});


/* GET json results */
router.get('/getResults', function resultsRouteCallback(req, res, next){


  // 1. clean user generated input
  var query = sanitize(req.body.query)
    ,fileLocation   = __dirname + '/../public/sample.json'


  // 2. Mock querying the database, instead we will use the filesystem module
  // fs to get the json file
  // fs.readFile( string file-location, function callback )
  fs.readFile(fileLocation, function readFileCallback(err, file){
    if(err) return next(err)

    // 3. parse file as json object
    var jsonObj = JSON.parse(file)

    // 4. Send results
    res.json({
      "results": JSON.parse(json)
    })
  })

})

module.exports = router;
