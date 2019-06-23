const router = require('express').Router();
const devpoolController = require('../../controllers/devpoolController');

router.route('/students/').get(devpoolController.getStudents);

router.route('/students/:github').get(devpoolController.getStudent);

router
  .route('/comments/:user')
  .get(devpoolController.getComments)
  .post(devpoolController.postComment);

router.route('/comments/:id').delete(devpoolController.deleteComment);

module.exports = router;
