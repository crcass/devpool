const db = require('../models');

module.exports = {
  getJobs: function(req, res) {
    const { user } = req.params;
    db.SavedJobs.findAll({ where: { user } }).then(data => res.json(data));
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
    const jobId = req.params.user;
    db.SavedJobs.destroy({ where: { jobId } }).then(data => res.json(data));
  }
};
