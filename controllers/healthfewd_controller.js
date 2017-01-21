var express = require("express");

var router = express.Router();
// Import the model (cat.js) to use its database functions.
var cat = require("../models/healthFewd.js");

// Create all our routes and set up logic within those routes where requestuired.
app.get("/", function(request, response) {
  response.redirect("/healthFewds");

});

app.get("/healthFewds", function(request, response) {
  healthFewd.all(function(data) {
    var hbsObject = {
      datafrommodel: data
    };
    console.log(hbsObject);
    response.render("index", hbsObject);
  });
});

app.post("/healthFewds/create", function(request, response) {
  healthFewd.create([
    "foodname", "devoured"
  ], [
    request.body.foodname, request.body.devoured
  ], function() {
    response.redirect("/healthFewds");
  });
});

app.put("/healthFewds/update/:id", function(request, response) {
  var condition = "id = " + request.params.id;

  // the paramater represents anything after ":"

  console.log("condition", condition);

  healthFewd.update({
    devour: request.body.devour
  }, condition, function() {
    response.redirect("/healthFewds");
  });
});



// Export routes for server.js to use.
module.exports = app;
