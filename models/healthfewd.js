// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var healthFewd = {
  all: function(cb) {
    orm.all("options", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("options", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("options", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("options", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (optionsController.js).
module.exports = healthFewd;
