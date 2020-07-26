const models = require("../../db/models");

class UsersController {
  async createUser(newUser) {
    const { User } = models
    const created = await User.create(newUser);
    return created
  }

  getUserByEmail(email) {
    email = email.email
    const { User } = models;
    return User.findOne({ where: { email } })
  }
}

module.exports = UsersController;
