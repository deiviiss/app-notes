//objeto
const notesController = {}
//modelo
const Note = require('../models/Note')

notesController.getNotes = async (req, res) => {

  //consulta todas las notas
  const notes = await Note.find()

  res.json(notes)
}

notesController.createNote = async (req, res) => {

  const { title, content, date, author } = req.body;

  //objeto a guardar
  const newNote = new Note({
    title,
    content,
    date,
    author
  })

  //guarda objeto
  await newNote.save()

  res.json({ message: 'Note Saved' })
}

notesController.getNote = async (req, res) => {

  const id_note = req.params.id

  const note = await Note.findById(id_note)

  res.json(note)
}

notesController.updateNote = async (req, res) => {

  const id_note = req.params.id

  const { title, content, date, author } = req.body;

  //objeto a guardar
  const updateNote = {
    title,
    content,
    date,
    author
  }

  //busca uno y actualiza
  await Note.findOneAndUpdate({ _id: id_note }, updateNote)

  res.json({ message: 'Note Update' })
}

notesController.deleteNote = async (req, res) => {

  id_note = req.params.id

  //elimina por id
  await Note.findByIdAndDelete(id_note)

  res.json({ message: 'Note Delete' })
}

module.exports = notesController;