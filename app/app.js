// Load our modules
var express       = require('express')
  ,http           = require('http')
  ,path           = require('path')

// setup params
var port = 3000

// setup our express app
var app = express()
app.set('port', port)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(express.static(path.join(__dirname, 'public')))

// routing
var routes = require('./routes/index')
app.use('/', routes)

// create our server and pass it our express app
var server = http.createServer(app)
server.listen(port)
