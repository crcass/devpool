const db = require('../models');

module.exports = {
  getUser: function(req, res) {
    db.Users.findOne({ where: { userId } }).then(data => res.json(data));
  },
  createUser: function(req, res) {
    db.Users.create({ userId, name, company }).then(data => res.json(data));
  }
};
