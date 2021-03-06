const { Router } = require('express');
const router = Router();

const usersController = require('../controllers/users.controller')

router.route('/')
  .get(usersController.getUsers)
  .post(usersController.createUser)

router.route('/:id')
  .get(usersController.getUser)
  .put(usersController.updateUser)
  .delete(usersController.deleteUser)

module.exports = router;