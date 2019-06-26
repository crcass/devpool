const router = require('express').Router();
const commentRoutes = require('./comments');
const jobRoutes = require('./jobs');
const savedJobRoutes = require('./savedJobs');
const studentRoutes = require('./students');

const routes = [commentRoutes, jobRoutes, savedJobRoutes, studentRoutes];

router.use('/', routes);

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

module.exports = router;
