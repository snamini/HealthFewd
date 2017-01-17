var connection = require("./connection.js");

// Object Relational Mapper (ORM)
// RESEARCH HOW TO DEFINE THE FUNCTIONS???

var orm = {
  selectAll: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? ALL ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(whatToSelect, table, orderCol, orderBy) {
    var queryString = "SELECT ?? FROM ?? ORDER BY ? ?";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol, orderBy], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    connection.query(queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
