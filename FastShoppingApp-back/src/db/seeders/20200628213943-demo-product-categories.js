"use strict";
const models = require("../models");

const { query } = require("express");

module.exports = {
  up: async (queryInterface) => {
    const products = await queryInterface.sequelize.query(
      "SELECT * FROM Products",
      {
        model: models.Product,
        mapToModel: true,
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const categories = await queryInterface.sequelize.query(
      "SELECT * FROM Categories",
      {
        model: models.Category,
        mapToModel: true,
        type: queryInterface.sequelize.QueryTypes.SELECT,
      }
    );
    const queries = products.map((product) => {
      const n = Math.floor(Math.random() * 3 + 1);
      const c = Array(n)
        .fill()
        .map(() => {
          return categories[Math.floor(Math.random() * categories.length)];
        });
      return product.setCategories(c);
    });
    return Promise.all(queries);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("ProductCategories", null, {});
  },
};
