"use strict";

var express = require('express');
var app = express();
var path = require('path');
app.use(express["static"](path.join(__dirname, 'public')));
app.use("/media", express["static"]('media'));
app.use("/public", express["static"]('public'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/html/index.html'));
});
app.listen(1234);
