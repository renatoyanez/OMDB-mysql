const models = require("../../db/models");

class ProductController {
  constructor(limit) {
    this.limit = limit;
  }

  async getPaginatedProducts(offset) {
    const { Product, Category } = models;
    return Product.findAndCountAll({
      include: [{ model: Category, through: { attributes: [] } }],
      limit: this.limit,
      offset: (offset - 1) * this.limit,
    });
  }
}

module.exports = ProductController;
