const express = require("express");
const FavoriteController = require("./favorites.controller");

const router = express.Router();
const controller = new FavoriteController();

router.post("/add", async (req, res, next) => {
  try {
    const favorite = req.body.film;
    const user = req.body.user
    const response = await controller.createFavorite(favorite, user);
    res.json(response);
  } catch (error) {
    next(error);
  }
});

router.get('/:userID', async (req, res, next) => {
  try {
    const id = req.params
    const fetched = await controller.getFavorite(id)
    res.json(fetched)
  } catch (error) {
    next(error)
  }
})


router.delete('/remove/:userID/:imdbID', async (req, res, next) => {
  try {
    const user = req.params.userID;
    const film = req.params.imdbID;
    const toDelete = await controller.removeFavorite(user, film);
    res.json(toDelete)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
