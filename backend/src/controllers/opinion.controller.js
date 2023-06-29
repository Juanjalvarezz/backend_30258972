//Aqui creamos el controlador, donde esta la mayor parte de la logica detras del funcionamiento del formulario

const database = require('../config/database');
const mysql2 = require('mysql2');

const opinionCreate = (req, res) => {
  const { nombre, apellido, email, asunto, mensaje } = req.body;

  const createQuery = `INSERT INTO opinion(nombre, apellido, email, asunto, mensaje) VALUE(?, ?, ?, ?,?)`;

  const query = mysql2.format(createQuery, [nombre, apellido, email, asunto, mensaje]);

  database.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send({ message: 'Opinion enviada con exito!' });
  });
};


module.exports = {opinionCreate};
