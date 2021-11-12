var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');

var app = express();

app.use(cors())

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/artaid', )
.then(result =>{
  console.log("COnnected DB")
})
.catch(err =>{
  console.log(err)
  console.log("Cannot Connect DB")
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.listen(3000, () =>{
  console.log("Listening on port 3000");
})