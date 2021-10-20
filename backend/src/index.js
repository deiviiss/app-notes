require('dotenv').config();
const app = require('./app');
require('./database');

// función principal que inicia el programa para utilizar async await
async function main() {
  await app.listen(app.set('port'));
  console.log('Server on port =>', app.set('port'));
}

main();