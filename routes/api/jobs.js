const router = require('express').Router();
const jobsController = require('../../controllers/jobs');

router
  .route('/jobs/')
  .get(jobsController.getJobs)
  .post(jobsController.postJob);

router.route('/jobs/:id').get(jobsController.getJob);

module.exports = router;
