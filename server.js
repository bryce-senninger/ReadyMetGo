require("dotenv").config();

//Requiring dependencies
const express = require("express");
// const path = require("path");
const db = require("./models");
// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

const syncOptions = {
  force: false
};
// LISTENER
// The below code effectively "starts" our server

db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});
