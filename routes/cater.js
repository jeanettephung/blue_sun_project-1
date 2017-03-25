var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "redmoonnoodlehouse@gmail.com",
        pass: "redmoonnoodle"
    }
});

exports.view = function(req, res){
    res.render('cater', {
    });
};

exports.send = function(req, res){
		
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
}