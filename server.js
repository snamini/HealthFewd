var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var connection = require("./config/connection.js");


var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/index"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");



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
// app.delete("/delete", function(req, res) {
//   connection.query("DELETE FROM options WHERE id = ?", [req.body.id], function(err, result) {
//     if (err) {
//       throw err;
//     }
//     res.redirect("/");
//   });
// });
//
// app.put("/update", function(req, res) {
//
//   connection.query("UPDATE options SET foodname = ? WHERE id = ?", [
//     req.body.foodname, req.body.id
//   ], function(err, result) {
//     if (err) {
//       throw err;
//     }
//     res.redirect("/");
//   });
// });
//
// app.listen(port);




// orm are the rules to get into kitchen
// model is the food order
