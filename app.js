
/**
 * Module dependencies.
 */

var express    = require('express');
var http       = require('http');
var path       = require('path');
var handlebars = require('express3-handlebars')
 
// Routes
var index   = require('./routes/index');
var menu    = require('./routes/menu');
var cater 	= require('./routes/cater');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/index', index.view);
app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/menu', menu.view);
app.get('/cater', cater.view);
app.get('/send', cater.send);
app.get('/contact', function(req,res) {
    res.render('contact_us');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
