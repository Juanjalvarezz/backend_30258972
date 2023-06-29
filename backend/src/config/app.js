//Aqui estan todos los requerimientos del archivo, y se exporta la variable app para ser usada en otros archivos 

const express = require('express');
const cors = require("cors")

const userRoutes = require('../routes/opinion.routes');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// endpoints
app.use('/user', userRoutes);

module.exports = app;
