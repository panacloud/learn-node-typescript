/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
import path = require("path");
import http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.end("Welcome to my homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("/weather", function(request, response) {
  response.end("The current weather is NICE.");
});

app.get("/hello/:who", function(request, response) {
  response.end("Hello, " + request.params.who + ".");
  // Fun fact: this has some security issues, which we’ll get to!
});

app.get("/redirect_home", function (request, response) {
  response.redirect("/");
});

app.get("/sendfile", function (request, response) {
  var filePath = path.resolve(__dirname, "cool-facts.txt");
  response.sendFile(filePath);
});

app.use(function(request, response) {
  response.statusCode = 404;
  response.end("404!");
});

http.createServer(app).listen(3000);
