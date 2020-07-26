const express = require("express");
const products = require("./products");
const customers = require("./customers");
const orders = require("./orders");

const router = express.Router();

router.use("/products", products);
router.use("/customers", customers);
router.use("/orders/", orders);

module.exports = router;
