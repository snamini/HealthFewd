var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var cat = require("../models/healthfewd.js");

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

app.get("/", function(req, res) {
  connection.query("SELECT * FROM options;", function(err, data) {
    if (err) {
      throw err;
    }

    res.render("index", { options: data });

  });
});

app.post("/create", function(req, res) {
  connection.query("INSERT INTO options (foodname) VALUES (?)", [req.body.foodname], function(err, result) {
    if (err) {
      throw err;
    }
    res.redirect("/");
  });
});
//
// // Export routes for server.js to use.
// module.exports = router;
