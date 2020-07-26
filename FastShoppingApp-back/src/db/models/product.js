"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: "ProductCategories",
      });
      Product.belongsToMany(models.Order, {
        through: "OrderProducts",
      });
    }
  }
  Product.init(
    {
      image: DataTypes.STRING,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Product",
      timestamps: false,
    }
  );
  return Product;
};
