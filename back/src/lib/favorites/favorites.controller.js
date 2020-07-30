const models = require("../../db/models");

class FavoritesController {
  async createFavorite(favorite, user) {
    const { User, Favorite } = models;

    const userInstance = user.id
      ? await User.findByPk(user.id)
      : await User.create(user);

    const doesItExist = await Favorite.findOne({
        where: {
          userID: user.id,
          film: favorite
        },
      })
      
      const favoriteInstance = doesItExist == null ? await Favorite.create({ film: favorite }) : null
      
      try {
        await favoriteInstance.setUser(userInstance)
      } catch (error) {
        throw Error('Already added!')
      }

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

  async removeFavorite(userID, imdbID) {
    const { Favorite } = models
    const id = userID
    const removed = await Favorite.destroy({where: { userID: id, film: imdbID }
    })
    return removed
  }
}

module.exports = FavoritesController;
