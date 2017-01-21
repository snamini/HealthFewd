// Import the ORM to create functions that will interact with the database.

// controller >> model >> ORM >> database, >> database >>ORM >> model >> controller >> view

var orm = require("../config/orm.js");

var healthFewd = {
  all: function(callback) {
    orm.all("options", function(response) {
      callback(response);
    });
  },
  // The variables columns and vals are arrays.
  create: function(columns, values, callback) {
    orm.create("options", columns, values, function(response) {
      callback(response);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.update("options", objColVals, condition, function(response) {
      callback(response);
    });
  }
};

// Export the database functions for the controller (optionsController.js).
module.exports = healthFewd;
