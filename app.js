var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
require('./lib/models')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

var app = express();
app.use(cors())

// console.log(app)

// /users
// /users/1
// /users/1/profile
// /users/1/profile/edit
// /users/1/profile/edit/whatever

// RESTful API design
// URL properly formatted

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// request traverses through the middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api/v1', apiRouter);

// app.use('/api/v1', apiRouter);
//
// api/v1/users GET  POST DELETE
// api/v1/dogs  POST DELETE
// api/v1/profiles GET DELETE
// api/v1/cars GET PUT

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
