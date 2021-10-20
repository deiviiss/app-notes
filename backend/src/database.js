const mongoose = require('mongoose');

// indica la creación de la bd
const URI = process.env.MONGODB_URI || 'mongodb://localhost/mernstack';

// connect permite conectar a un servidor de mongodb
mongoose.connect(URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true
});

//escucha la conexión
const connection = mongoose.connection;

//una vez exista la conexión
connection.once('open', () => {
  console.log('DB is connected');
});