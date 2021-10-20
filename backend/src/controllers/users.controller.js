//objeto
const usersController = {}
//modelo
const User = require('../models/User')


usersController.getUsers = async (req, res) => {

  //consulta todos los usuarios
  const users = await User.find()

  res.json(users)
}

usersController.createUser = async (req, res) => {

  const { username } = req.body;

  //objeto a guardar
  const newUser = new User({
    username
  })

  //guarda objeto
  await newUser.save()

  res.json({ message: 'User Saved' })
}

usersController.getUser = async (req, res) => {

  const id_user = req.params.id;

  const user = await User.findById(id_user)

  res.json(user)
}

usersController.updateUser = async (req, res) => {

  const id_user = req.params.id

  const { username } = req.body

  const updateUser = {
    username
  }

  //busca uno y actualiza
  await User.findOneAndUpdate({ _id: id_user }, updateUser)

  res.json({ message: 'User Update' })
}

usersController.deleteUser = async (req, res) => {

  const id_user = req.params.id

  //elimina por id
  await User.findByIdAndDelete(id_user)

  res.json({ message: 'User Delete' })
}

module.exports = usersController;