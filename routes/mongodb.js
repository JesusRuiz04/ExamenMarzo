const express = require('express');
const router = express.Router();
const Personaje = require('../models/personaje');

router.get('/', async (req, res, next) => {
  try {
    const personajes = await Personaje.find({});

    personajes.forEach(personaje => {
      if (personaje.gender === 'Male') {
        personaje.gender = 'Hombre';
      } else if (personaje.gender === 'Female') {
        personaje.gender = 'Mujer';
      } else {
        personaje.gender = 'Bicho';
      }
    });

    res.render('personajes', { title: 'Todos los personajes', personajes });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
