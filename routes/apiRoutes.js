// Pull in the characters
//const profiles = require("../data/setprofiles.js");
const userQueries = require("../controller/userQueries");
const db = require("../models");

// Export routes
module.exports = function(app) {
  app.get("/api/setprofiles", function(req, res) {
    db.Users.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Add new match
  app.post("/api/setprofiles", function(req, res) {
    console.log(req.body);
    const medium = req.body;

    userQueries.addUser(medium, function(data) {
      userQueries.userMatch(data.id, data.mediumPair, function(data) {
        res.send(data);
      });
    });
  });
};
