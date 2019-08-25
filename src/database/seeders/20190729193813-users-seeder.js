"use strict";

const users = require("../exports/users.ts");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", users);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null);
  }
};
