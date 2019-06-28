const router = require('express').Router();
const commentRoutes = require('./comments');
const jobRoutes = require('./jobs');
const savedJobRoutes = require('./savedJobs');
const studentRoutes = require('./students');
const userRoutes = require('./user');

const routes = [
  commentRoutes,
  jobRoutes,
  savedJobRoutes,
  studentRoutes,
  userRoutes
];

router.use('/', routes);

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

module.exports = router;
