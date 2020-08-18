var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers.js');
const { list } = require('../controllers/productosController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("users");
});

router.get('/register', userController.register)

router.get('/lista', userController.list);

module.exports = router;
