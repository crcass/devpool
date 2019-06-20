var db = require('../models');

module.exports = {
  getMusic: function(req, res) {
    const { category, term } = req.params;
    db.Music.findAll({ where: { [category]: term } }).then(data =>
      res.json(data)
    );
  }
};
