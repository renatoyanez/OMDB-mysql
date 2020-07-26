const express = require("express");
const UsersController = require("./users.controller");

const router = express.Router();
const controller = new UsersController();

router.post("/create", async (req, res, next) => {
  try {
    const user = req.body;
    const response = await controller.createUser(user);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

router.get("/by-email/:email", async (req, res, next) => {
  const email = req.params;
  await controller.getUserByEmail(email).then(response => {
    if (!response) res.sendStatus(404)
    res.status(200).json(response)
  }).catch(next)
})

//tira error en cliente, pero 200 en back con problema header

// router.get("/by-email/:email", async (req, res, next) => {
//   const email = req.params;
//   const response = controller.getUserByEmail(email)
//   response.then(data => {
//     if (!data) res.sendStatus(404)
//     res.json(data)
//   })
//     .catch(next)
//   })
//tira error en cliente, pero 200 en back con problema header


module.exports = router;