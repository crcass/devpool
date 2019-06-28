const db = require('../models');

module.exports = {
  getUser: function(req, res) {
    const { userId } = req.params;
    db.Users.findOne({ where: { userId } }).then(data => res.json(data));
  },
  createUser: function(req, res) {
    db.Users.create({ userId, name, company }).then(data => res.json(data));
  },
  updateUser: function(req, res) {
    const { userId } = req.params;
    const { company, linkedin } = req.body;
    db.Users.update({ company, linkedin }, { where: { userId } }).then(data =>
      res.json(data)
    );
  }
};
