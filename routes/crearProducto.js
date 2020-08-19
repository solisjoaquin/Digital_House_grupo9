var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('crearProducto', { title: 'Chubacha' });
  });
  
  module.exports = router;