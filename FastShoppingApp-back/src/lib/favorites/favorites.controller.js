const models = require("../../db/models");

class FavoritesController {
  async createFavorite(favorite, user) {
    const { User, Favorite } = models;

    const userInstance = user.id
      ? await User.findByPk(user.id)
      : await User.create(user);

    const favoriteInstance = await Favorite.create({ film: favorite }); 
    await favoriteInstance.setUser(userInstance)
      
    return favoriteInstance;
  }

  async getFavorite(userID) {
    const { Favorite } = models
    const id = userID.userID
    const response = await Favorite.findAll({
      where: {
        userId: id
      }
    })
    return response
  }
}

module.exports = FavoritesController;
