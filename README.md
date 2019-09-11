# ReadyMetGo!

---

## Objective:

- Connect creative and skilled individuals seeking collaborators.

---

## Project Overview: Express Server Routing, API Manipulation, MySQL Database Get And Posts, Sequelize Object Relational Mapping, And Dynamic HTML Creation

This full-stack web app takes user input from a form, and appends their values to a MySQL database- thereby creating their unique profile. Furthermore, it uses these inputs to ping the database for people meeting their specific search criteria. Users meeting the search are displayed dynamically, along with a button linking to that user's profile containing additional information.

## Instructions for Operation

Clone the repository and install the necessary dependencies. You will also have to have a local MySQL server running on your machine. Ensure that the contents of config/config.js match your local connection parameters. Then, create a database locally inside MySQL using:

- CREATE DATABASE readymetgo;

Then, you are ready to insert the table. This will be done automatically with all the necessary structure by simply starting the server. While in the root project directory, type this in your terminal window:

- node server.js

This will create the table, now we will need to insert some dummy data to demonstrate functionality. Control+C to end the server listen, then run:

- node config/userData.js

This will require our model structure, and insert all the dummy data located in our data/setprofiles.js into our readymetgo database. Next we are ready to restart the server by once again running:

- node server.js

The website will now be deployed at http://localhost:8080

This project will also be deployed on Heroku, a link to which can be found in the links subheading of this readme.

## Project Organization

This project contains a file structure meant to meaningfully divide the MVC components into unique directories.

### Config Directory

The config directory contains the code to initialize the connection to the MySQL database. It also contains references to the models directory for the purpose of populating the database with our dummy data within the structure defined in the models repository.

### Controller Directory

The controller directory contains code to add users to the database, requiring our models directory.

### Data Directory

The data directory gives us some code to populate the database with, so we can test and demonstrate the app's functionality.

### Models Directory

The models directory contains our object relational mapping, in this case done using Sequelize. It uses our connection established in the config directory to connect to our database and gives us some structural definitions for our users entries.

## Public Directory

This directory contains the base HTML, CSS, necessary images, and the front-facing javascript (such as user click events listeners) necessary to interact with the API.

## Routes Directory

The routes directory contains code defining our get and put routes to the API, as well as html routes to display our base HTML structures contained in the public directory.

## Server File

The server file residing outside all other directories contains the information required to initialize our server, as well as lets our app know to use our defined API and HTML routes.

## Technologies Implemented

This project uses:
* CSS
* Javascript
* jQuery
* MySQL
* Node.js
* npm dependencies
    * express
    * mysql
    * sequelize

## Links

Github Repository: https://github.com/bryce-senninger/ReadyMetGo

Heroku Deployed App: https://readymetgo.herokuapp.com/