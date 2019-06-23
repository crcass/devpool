const db = require('../models');

module.exports = {
  getComments: function(req, res) {
    const { user } = req.params;
    db.Comments.findAll({ where: { user } }).then(data => res.json(data));
  },
  postComment: function(req, res) {
    const { user } = req.params;
    const { author, comment } = req.body;
    let { link } = req.body;
    if (link === undefined) {
      link = null;
    }
    db.Comments.create({ author, comment, user, link }).then(data =>
      res.json(data)
    );
  },
  deleteComment: function(req, res) {
    const { id } = req.params;
    db.Comments.destroy({ where: { id } }).then(data => res.json(data));
  }
};
