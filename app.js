var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var matriculadoRouter= require('./routes/matriculado');
var materialesRouter= require('./routes/materiales');
var consultasEmRouter= require('./routes/consultas-em');
var consultasMeRouter= require('./routes/consultas-me');
var contactoEmRouter= require('./routes/contacto-em');
var contactoMeRouter= require('./routes/contacto-me');
var productosRouter= require('./routes/productos');
var ubicacionRouter= require('./routes/ubicacion');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/matriculado', matriculadoRouter);
app.use('/materiales', materialesRouter);
app.use('/matriculado/consultas-em', consultasEmRouter);
app.use('/materiales/consultas-me', consultasMeRouter);
app.use('/matriculado/contacto-em', contactoEmRouter);
app.use('/materiales/contacto-me', contactoMeRouter);
app.use('/materiales/productos', productosRouter);
app.use('/materiales/ubicacion', ubicacionRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
