var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var personasRouter = require('./routes/personas-routes');
var app = express();
app.use(cors({origin: 'http://localhost:4200'}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/personas', personasRouter);

module.exports = app;
