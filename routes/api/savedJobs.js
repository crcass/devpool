const router = require('express').Router();
const savedJobsController = require('../../controllers/savedJobs');

router
  .route('/jobs/saved/')

  .post(savedJobsController.postJob);

router
  .route('/jobs/saved/:user')
  .get(savedJobsController.getJobs)
  .delete(savedJobsController.deleteJob);

module.exports = router;
