"use strict";

var http = require("http");
var express = require("express");
var path = require("path");
var logger = require("morgan");

var port = process.env.PORT || 3000;
var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(express.static(path.join(__dirname, "assets")));
app.get("/", function (req, res) {
  res.render("index");
});
var server = http.createServer(app).listen(port, function() {
  console.log("Express server listening on port " + port);
});
