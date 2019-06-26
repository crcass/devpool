const db = require('../models');

module.exports = {
  getJobs: function(req, res) {
    db.SavedJobs.findAll({}).then(data => res.json(data));
  },
  postJob: function(req, res) {
    const {
      id,
      user,
      author,
      company,
      website,
      image,
      title,
      description,
      link
    } = req.body;
    const jobId = id;
    db.SavedJobs.create({
      jobId,
      user,
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
    db.SavedJobs.destroy({ where: { id } }).then(data => res.json(data));
  }
};
