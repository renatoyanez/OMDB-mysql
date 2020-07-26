const models = require("../../db/models");

class CustomersController {
  getCostumerByEmail(email) {
    const { Customer } = models;
    return Customer.findOne({ where: { email } });
  }
}

module.exports = CustomersController;
