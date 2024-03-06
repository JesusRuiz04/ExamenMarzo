var express = require('express');
var router = express.Router();
const db = require('../models');

router.get('/', async function(req, res) {
  try {
    const personajes = await db.RickYMorty.findAll(); 
    console.log(personajes);
    res.render('sqlite', {personajes});
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    res.status(500).json({ error: 'Error interno del servidor' }); 
  }
});

router.post('/', async function(req, res) {
    const {id} = req.body;
    let personajes = [];
    try {
      let personajeRaw = await db.RickYMorty.findOne({
        where: { id: id }
    });
    if(personajeRaw != null)
        personajes.push(personajeRaw);
    res.render('sqlite', {personajes});
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      res.status(500).json({ error: 'Error interno del servidor' }); 
    }
  });

module.exports = router;
