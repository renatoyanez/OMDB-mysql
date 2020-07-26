"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Renato Yanez",
        email: "renatoyanez95@gmail.com",
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
