
/**
 * Module dependencies.
 */

var express    = require('express');
var http       = require('http');
var path       = require('path');
var handlebars = require('express3-handlebars')

var index   = require('./routes/index');
var about 	= require('./routes/about')
var menu    = require('./routes/menu');
var cater		= require('./routes/cater');
var contact = require('./routes/contact');

// Example route
// var user = require('./routes/user');

var app = express();


//yelp api call
//var Yelp = require('yelp');
var Promise = require('promise');
var Yelp = require('node-yelp-fusion');
var yelp=new Yelp({ id:'jc6LBOrY9Y2ovxr0UIBbDw', secret:'sNsySmlXXSLoP2rg9jWwHe4lAKKa6qHnWYXSSWXqfIex6o1MRzTdcl7qlMDtuk6j'});
/*var yelp = new Yelp({
    consumer_key: 'consumer-key',
    consumer_secret: 'consumer-secret',
    token: 'token',
    token_secret: 'token-secret',
});*/





// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(express.cookieParser('Intro HCI secret key'));
//app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

yelp.reviews("red-moon-noodle-house-san-diego")
    .then(function(result){
        console.log(result);
        res.json(result);
    });


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/index', function (req, res) {
    res.render('index');
});
app.get('/about', function (req, res) {
    res.render('about');
});
app.get('/menu', menu.view);
app.get('/cater', function (req, res) {
    res.render('cater');
});
app.get('/contact', function(req,res) {
    res.render('contact_us');
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
