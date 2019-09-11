// We need to include the path package to get the correct file path for our html
var path = require("path");
var express = require("express");

// ROUTING

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/landing.html"));
  });

  app.get("/ready", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/ready.html"));
  });

  app.get("/met", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/met.html"));
  });

  app.get("/results", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/results.html"));
  });

  app.use("/public", express.static(path.join(__dirname, "../public")));

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.redirect("/");
  });
};
