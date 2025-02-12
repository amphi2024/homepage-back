const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const serverDownloadsRouter = require('./routes/servers');
const releasesRouter = require('./routes/releases');
const fs = require("fs");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/servers', serverDownloadsRouter);
app.use('/releases', releasesRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "index.html"));
});

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });



// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
