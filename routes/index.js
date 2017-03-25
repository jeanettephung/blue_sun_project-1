var review = require('../data/review.json');

exports.view = function(req, res){
  res.render('index', {
		"review": review
	});
};