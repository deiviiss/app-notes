const { Router } = require('express');
const router = Router();

const notesController = require('../controllers/notes.controller')

// router.get('/', (req, res) => {
//   res.send('Router notes')
// })

router.route('/')
  .get(notesController.getNotes)
  .post(notesController.createNote)

router.route('/:id')
  .get(notesController.getNote)
  .put(notesController.updateNote)
  .delete(notesController.deleteNote)

module.exports = router;