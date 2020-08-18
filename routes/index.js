var express = require('express');
var router = express.Router();

var userController = require('../controllers/productosController.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chubacha' });

});



module.exports = router;
