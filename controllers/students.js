const db = require('../models');

module.exports = {
  getStudents: function(req, res) {
    db.Students.findAll({}).then(data => res.json(data));
  },
  getStudent: function(req, res) {
    const { github } = req.params;
    db.Students.findOne({ where: { github } }).then(data => res.json(data));
  }
};