const models = require("../../db/models");

class OrdersController {
  async createOrder(order, customer) {
    const { Customer, Order, Product } = models;

    const customerInstance = customer.id
      ? await Customer.findByPk(customer.id)
      : await Customer.create(customer);

    const orderInstance = await Order.create();
    await orderInstance.setCustomer(customerInstance);

    const products = await Promise.all(
      Object.keys(order).map((id) => Product.findByPk(id))
    );

    await Promise.all(
      products.map((product) =>
        orderInstance.addProduct(product, {
          through: { quantity: order[product.id] },
        })
      )
    );
    return orderInstance;
  }
}

module.exports = OrdersController;
