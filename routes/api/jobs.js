const router = require('express').Router();
const jobsController = require('../../controllers/jobs');

router
  .route('/jobs/')
  .get(jobsController.getJobs)
  .post(jobsController.postJob);

router
  .route('/jobs/:id')
  .get(jobsController.getJob)
  .delete(jobsController.deleteJob);

router.route('/jobs/author/:author').get(jobsController.getJobs);

module.exports = router;
