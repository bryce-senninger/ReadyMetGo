var users = require("../data/setprofiles");
var db = require("../models");

db.Users.bulkCreate(users).then(resp => {
  console.log(resp);
});
