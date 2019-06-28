const router = require('express').Router();
const userController = require('../../controllers/user');

router
  .route('/user/:userId')
  .get(userController.getUser)
  .post(userController.createUser)
  .put(userController.updateUser);

module.exports = router;
