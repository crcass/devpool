const router = require('express').Router();
const studentsController = require('../../controllers/students');

router.route('/students/').get(studentsController.getStudents);

router
  .route('/students/:github')
  .get(studentsController.getStudent)
  .post(studentsController.createStudent)
  .put(studentsController.updateStudent);

module.exports = router;
