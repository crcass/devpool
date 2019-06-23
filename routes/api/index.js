const router = require('express').Router();
const devpoolRoutes = require('./devpool');

router.use('/', devpoolRoutes);

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

module.exports = router;
