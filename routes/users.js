var express = require('express');
var router = express.Router();
var userController = require('../controllers/userControllers.js');
const { list } = require('../controllers/productosController.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("respond with a resource");
});

// para seguir el patron MVC dirigimos a userController
router.get('/register', userController.register);
router.post('/register', userController.create)

router.get('/login', userController.login)

router.get('/list', userController.list);

router.get('/search', userController.search);

router.get('/edit/:idUser', userController.edit)

// para edit archivos debemos usar el put,tambien editar action el form
router.put('/edit', function(req,res){
  res.send("fui por put")
})


router.delete('/delete/:idUser', function(req,res){
  res.send('Soy delete')
})

module.exports = router;
