//Aqui se conecta el documento con nuestra base de datos en MySql

const myql2 = require('mysql2');

const database = myql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'feedback',
});

module.exports = database;
