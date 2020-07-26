"use strict";

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert("Customers", [
      {
        name: "John Doe",
        identification: "1234567890",
        address: `711-2880 Nulla St. Mankato Mississippi 96522`,
        phone: "(257) 563-7401",
        email: "test@email.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete("Customers", null, {});
  },
};
