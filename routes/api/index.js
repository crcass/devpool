const router = require('express').Router();
const musicRoutes = require('./music');

router.use('/music', musicRoutes);

router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

module.exports = router;
