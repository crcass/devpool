const router = require('express').Router();
const savedJobsController = require('../../controllers/savedJobs');

router
  .route('/jobs/saved/')
  .get(savedJobsController.getJobs)
  .post(savedJobsController.postJob);

router.route('/jobs/saved/:id').delete(savedJobsController.deleteJob);

module.exports = router;
