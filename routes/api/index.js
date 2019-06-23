const router = require('express').Router();
const commentRoutes = require('./comments');
const studentRoutes = require('./students');

const routes = [commentRoutes, studentRoutes];

router.use('/', routes);

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

module.exports = router;
