//Aqui creamos la ruta de tipo "POST" que se usara para enviar los datos desde el front-end hasta la base de datos

const { Router } = require('express');

const {opinionCreate} = require('../controllers/opinion.controller');

const router = Router();

router.post('/', opinionCreate);

module.exports = router;
