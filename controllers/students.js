const db = require('../models');

module.exports = {
  getStudents: function(req, res) {
    db.Students.findAll({}).then(data => res.json(data));
  },
  getStudent: function(req, res) {
    const { github } = req.params;
    db.Students.findOne({ where: { github } }).then(data => res.json(data));
  },
  createStudent: function(req, res) {
    const { github } = req.params;
    const { name, linkedin, portfolio } = req.body;
    db.Students.create({ name, github, linkedin, portfolio }).then(data =>
      res.json(data)
    );
  },
  updateStudent: function(req, res) {
    const { github } = req.params;
    const { linkedin, portfolio } = req.body;
    db.Students.update({ linkedin, portfolio }, { where: { github } }).then(
      data => res.json(data)
    );
  }
};
