const db = require("../models");
const Op = db.Sequelize.Op;

module.exports = {
  addUser: function(user, cb) {
    db.Users.create(user).then(function(res, err) {
      if (err) {
        throw err;
      }
      console.log(res);
      cb(res);
    });
  },
  userMatch: function(id, medium, cb) {
    db.Users.findAll({
      where: {
        medium: medium,
        id: {
          [Op.ne]: id
        }
      }
    }).then(function(res, err) {
      if (err) {
        throw err;
      }
      // Could write a function to filter the results
      cb(res);
      console.log(res);
    });
  }
};
