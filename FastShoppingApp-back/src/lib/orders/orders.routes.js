const express = require("express");
const OrderController = require("./orders.controller");

const router = express.Router();
const controller = new OrderController();

router.post("/", async (req, res, next) => {
  try {
    const { customer, order } = req.body;
    const response = await controller.createOrder(order, customer);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
