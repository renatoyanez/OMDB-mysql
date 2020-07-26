const express = require("express");
const CustomersController = require("./customers.controller");

const router = express.Router();
const controller = new CustomersController();

router.get("/by-email/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    const response = await controller.getCostumerByEmail(email);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
