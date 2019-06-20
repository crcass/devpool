const router = require('express').Router();
const musicController = require('../../controllers/musicController');

router
  .route('/')
  .get(musicController.getMusic)
  .post(musicController.create);

router.route('/:id').delete(musicController.remove);

module.exports = router;
