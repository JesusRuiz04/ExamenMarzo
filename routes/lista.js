var express = require('express');
var router = express.Router();
var Personaje = require('../models/personaje');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
      const personajes = await Personaje.find({});
      res.render('personajes', { title: 'Todos los personajes', personajes });
  } catch (error) {
      next(error);
  }
});

module.exports = router;
