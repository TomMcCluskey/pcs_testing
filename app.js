var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var tester = require('./tester.js');
var Mocha = require('mocha');
var fs = require('fs');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// express routes

app.get('/', function (req, res) {
  res.render('index');
});

app.post('/done', function (req, res) {
  // console.log(req.body);
  tester.runTests(req.body, function() {
    res.render('output', {dirName: tester.dirName});
  });
});

app.delete(/tmp[a-zA-Z0-9_-]{7,14}/, function (req, res) {
  console.log(req.url);
  fs.unlink('./public/' + req.url + '/test.js', function() {
    fs.rmdir('./public/' + req.url, function() {
      res.end();
    });
  });
});

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: err
  });
});


module.exports = app;

app.set('port', process.env.PORT || 4444);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port # ' + app.get('port'));
});
