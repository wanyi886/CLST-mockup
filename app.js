var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname)

// trying:
// app.use(express.static(__dirname));
// app.use('/WTA-739', express.static(__dirname + './public'));


app.use('/', indexRouter);
// app.use('/WTA-739', indexRouter); // Not working

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  // err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    // stack: isProduction ? null : err.stack // this line would make request hanging
  });
});



app.listen(process.env.PORT || "1004", function() {
  console.log("listening on port 1004")
})


module.exports = app;
