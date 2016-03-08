var express = require('express'),
  fs        = require('fs'),
<<<<<<< HEAD
  router    = express.Router(),
  sanitize  = require('mongo-sanitize')

// GET home page.
router.get('/', function getIndexCallback(req, res, next) {
=======
  router    = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
>>>>>>> dc3d11b7bfa4f21d24daa6b20e938feeb1a9f3a4

  // render a jade file from views/ folder, in this case index.jade
  res.render('index', { title: 'Coder Forge - Ajax Autocomplete' });
});

<<<<<<< HEAD
// GET json results.
router.get('/getResults', function resultsRouteCallback(req, res, next){

  // vars
  var query = sanitize(req.body.query)                                          // sanitize user provided input (remove possibility of user inputed code)
    ,fileLocation   = __dirname + '/../public/sample.json'                      // the location of the json file

  // mock database request with file system request
  fs.readFile(fileLocation, function readFileCallback(err, file){               // read the file.
    if(err) return next(err)                                                    // if error pass back to expressJS.

    var jsonObj = JSON.parse(file)                                              // parse file contents as JSON object.

    res.json({                                                                  // send json results to client.
      "results": jsonObj
    })

=======

/* GET json */
router.get('/getResults', function resultsRouteCallback(req, res, next){

  res.json({
    status: "ok"
>>>>>>> dc3d11b7bfa4f21d24daa6b20e938feeb1a9f3a4
  })
})

module.exports = router;
