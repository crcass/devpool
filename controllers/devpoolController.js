var db = require('../models');

module.exports = {
  getStudents: function(req, res) {
    db.Students.findAll({}).then(data => res.json(data));
  },
  getStudent: function(req, res) {
    const { github } = req.params;
    db.Students.findOne({ where: { github } }).then(data => res.json(data));
  },
  getComments: function(req, res) {
    const { user } = req.params;
    db.Comments.findAll({ where: { user } }).then(data => res.json(data));
  },
  postComment: function(req, res) {
    const { user } = req.params;
    const { author, comment } = req.body;
    db.Comments.create({ author, comment, user }).then(data => res.json(data));
  },
  deleteComment: function(req, res) {
    const { id } = req.params;
    db.Comments.destroy({ where: { id } }).then(data => res.json(data));
  }
};
