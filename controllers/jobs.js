const db = require('../models');

module.exports = {
  getJobs: function(req, res) {
    console.log('finding jobs!');
    db.Jobs.findAll({}).then(data => res.json(data));
  },
  getJob: function(req, res) {
    console.log('finding one job!');
    const { id } = req.params;
    db.Jobs.findOne({ where: { id } }).then(data => res.json(data));
  },
  postJob: function(req, res) {
    const {
      author,
      company,
      website,
      image,
      title,
      description,
      link
    } = req.body;
    db.Jobs.create({
      author,
      company,
      website,
      image,
      title,
      description,
      link
    }).then(data => res.json(data));
  },
  deleteJob: function(req, res) {
    const { id } = req.params;
    db.Jobs.destroy({ where: { id } }).then(data => res.json(data));
  }
};
