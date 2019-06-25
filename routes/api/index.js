const router = require('express').Router();
const commentRoutes = require('./comments');
const jobRoutes = require('./jobs');
const studentRoutes = require('./students');

const routes = [commentRoutes, jobRoutes, studentRoutes];

router.use('/', routes);

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

module.exports = router;
