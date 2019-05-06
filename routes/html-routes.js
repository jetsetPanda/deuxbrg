// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var db = require("../models");
const sequelize = require('../models/index.js').sequelize;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
      db.Burger.findAll({}).then(function(data) {
          res.render("index", {burger:data});
      });
  });

}