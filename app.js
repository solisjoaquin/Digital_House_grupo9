//
// correr el servidor
// nodemon bin/www 


//----------------------------------------------
var express = require('express');
var path = require('path');
var app = express();
// instalar para usar el metodo PUT , mas abajo se la utiliza con el use 
var methodOverride = require('method-override');

// configurar el manejo de los archivos ejs
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// para el method POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//------------
app.use(express.static(path.join(__dirname, 'public')));

// agregar esta linea para el uso del PUT
app.use(methodOverride("_method"));


// importar las rutas a usar y setearlas en una variable
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usuarios');
var productsRouter = require('./routes/productos')

// establecer las rutas a usar
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', productsRouter);


// ---------------------------------------------
// mostrar pantalla de error 404. usa el ejs 'not-found'
app.use(function(req, res, next) {
  res.status(404).render('not-found');
});



module.exports = app;
