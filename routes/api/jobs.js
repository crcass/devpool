const router = require('express').Router();
const jobsController = require('../../controllers/jobs');

router.route('/jobs/').get(jobsController.getJobs);

router.route('/jobs/:id').get(jobsController.getJob);

module.exports = router;
