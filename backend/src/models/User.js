// modelar datos
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true, //limpia los espacios en blanco
    unique: true
  }
},
  {
    timestamps: true
  }
);

// crea la colección (tables)
module.exports = model('User', userSchema);

// module.exports = model;