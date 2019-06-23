const router = require('express').Router();
const commentsController = require('../../controllers/comments');

router
  .route('/comments/:user')
  .get(commentsController.getComments)
  .post(commentsController.postComment);

router.route('/comments/:id').delete(commentsController.deleteComment);

module.exports = router;
