var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

// DB
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jayesh:2Ol8BLec9QjxwVCm@notesapp.klr66.mongodb.net/artaid?retryWrites=true&w=majority', { useNewUrlParser: true }, (err, data) => {
  if (err) console.log(err);
  else console.log(data)
})

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(3001, () => {
  console.log("Listening on 3001");
})