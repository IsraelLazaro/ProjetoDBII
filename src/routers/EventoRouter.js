var express = require('express');
var router = express.Router();


const EventoControllers = require('../controllers/EventoCotroller');


router.get('/', EventoControllers.listarEventos);
router.get('/sincronizar', EventoControllers.sincronizar);


module.exports = router;