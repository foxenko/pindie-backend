const gamesRouter = require("express").Router();
const {
  findAllGames,
  findGameById,
  createGame,
  deleteGame,
  updateGame,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkIfUsersAreSafe,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameById,
  sendGameCreated,
  sendGameDeleted,
  sendGameUpdated,
} = require("../controllers/games");
const { checkAuth } = require("../middlewares/auth");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);

module.exports = gamesRouter;
