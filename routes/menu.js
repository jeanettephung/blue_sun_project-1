var menus = require('../data/menu.json');

exports.view = function(req, res) {
  res.render('menu', menus);
}
