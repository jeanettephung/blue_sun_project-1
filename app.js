
/**
 * Module dependencies.
 */

var express    = require('express');
var nodemailer = require("nodemailer");
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
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "redmoonnoodlehouse@gmail.com",
        pass: "redmoonnoodle"
    }
});


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
app.get('/cater', function (req, res) {
    res.render('cater');
});
app.get('/send',function(req,res){

    var mailOptions={
        to : "redmoonnoodlehouse@gmail.com",
        subject : "CATERING for  "+req.query.name+" on date: "+req.query.date,
        text : req.query.message
    };
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
            console.log(error);
            res.end("error");
        }else{
            console.log("Message sent: " + response.message);
            res.end("sent");
        }
    });
});
app.get('/contact', function(req,res) {
    res.render('contact_us');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
