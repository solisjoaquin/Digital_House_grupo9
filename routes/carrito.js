var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('carrito', { title: 'Chubacha' });
  });
  
  module.exports = router;