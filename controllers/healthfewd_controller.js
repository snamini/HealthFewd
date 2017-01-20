var express = require("express");

var app = express.Router();
// Import the model (healthFewd.js) to use its database functions.
var healthFewd = require("../models/healthFewd.js");

// Create all our routes and set up logic within those routes where required.
app.get("/", function(req, res) {
  res.redirect("/healthFewds");
  console.log("it worked!");

});

app.get("/healthFewds", function(req, res) {
  healthFewd.all(function(data) {
    var hbsObject = {
      data: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

app.post("/healthFewds/create", function(req, res) {
  healthFewd.create([
    "foodname", "devoured"
  ], [
    req.body.foodname, req.body.devoured
  ], function() {
    res.redirect("/healthFewds");
  });
});

app.put("/healthFewds/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  healthFewd.update({
    devour: req.body.devour
  }, condition, function() {
    res.redirect("/healthFewds");
  });
});

app.delete("/healthFewds/delete/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  healthFewd.delete(condition, function() {
    res.redirect("/healthFewds");
  });
});

// Export routes for server.js to use.
module.exports = app;
