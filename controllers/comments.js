const db = require('../models');

module.exports = {
  getComments: function(req, res) {
    const { author, user } = req.params;
    if (!author) {
      return db.Comments.findAll({ where: { user } }).then(data =>
        res.json(data)
      );
    }
    db.Comments.findAll({ where: { user, author } }).then(data =>
      res.json(data)
    );
  },
  postComment: function(req, res) {
    const { user, author } = req.params;
    const { comment } = req.body;
    let { link } = req.body;
    if (!link) {
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
