// notas
// npm install express-generator -g
// express expressG(nombredelprojecto) --ejs
// cambiar a la carpeta del projecto creado: cd expressG
// npm install
//
// correr el servidor
// nodemon bin/www 

// iniciar express solo
// npm install express --save

// para instalar ejs en un projecto sin express genarator
// npm install ejs
// app.set("view engine", "ejs") --> en app.js


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// instalar para usar el PUT , mas abajo se la utiliza con el use 
var methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var carritoRouter = require('./routes/carrito');
var crearProducto = require('./routes/crearProducto');




var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// agregar esta linea para el uso del PUT
app.use(methodOverride("_method"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/carrito', carritoRouter);
app.use('/crearProducto', crearProducto);

// catch 404 and forward to error handler
// 
/* app.use(function(req, res, next) {
  next(createError(404));
}); */

app.use(function(req, res, next) {
  res.status(404).render('not-found');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
