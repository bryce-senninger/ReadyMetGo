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

  //app.post("/api/setprofiles.js", function(req, res) {
  //  //userProfile will give you 4 attributes in newProfile on ready.html page
  //  //4 values we decided to get from user
  //  let userProfile = req.body;
  //  console.log("from apiRoute.js : " + userProfile);
  //  res.json("test");
  //});

  // Add new match
  app.post("/api/setprofiles", function(req, res) {
    console.log(req.body);
    const medium = req.body;

    userQueries.addUser(medium, function(data) {
      userQueries.userMatch(data.id, data.mediumPair, function(data) {
        res.send(data);
      });
    });

    // db.Users.findAll({
    //   where: { medium }
    // }).then(function(matches) {
    //   if (matches.length === 0) {
    //     return res.status(404).send("No match found");
    //   }

    //   res.json({
    //     status: "OK",
    //     name: matches[0].name
    //   });
    // });

    // Send response
  });
};
