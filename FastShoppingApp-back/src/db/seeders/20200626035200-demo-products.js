"use strict";
const products = require("./products.json");

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      "Products",
      products.map((product) => ({
        ...product,
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
