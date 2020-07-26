"use strict";
const categories = require("./categories.json");

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      "Categories",
      categories.map((category) => ({
        ...category,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
