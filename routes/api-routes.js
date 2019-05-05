// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        burger.selectAll(function(data) {
            var hbsObject = {
                burger: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    });

    app.post("/api/burger", function(req,res) {
        burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
            res.json({ id: result.insertId }); //<<<jQ: Sending back ID of newly create hamborgouesoua
        });
    });

    app.put("/api/burger/:id", function(req, res) {
        var condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if (result.changedRows === 0) {
                return res.status(404).end(); //<<<jQ: if no rows were changed >> 404 cuz the ID must not exist then.....
            }
            res.status(200).end();
        }
        );
    });