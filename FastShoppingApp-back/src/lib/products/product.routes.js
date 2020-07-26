const express = require("express");
const ProductController = require("./product.controller");

const router = express.Router();
const controller = new ProductController(20);

router.get("/", async (req, res, next) => {
  try {
    const { page } = req.query;
    const response = await controller.getPaginatedProducts(Number(page));
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
