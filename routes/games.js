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
  checkIsVoteRequest,
} = require("../middlewares/games");
const {
  sendAllGames,
  sendGameById,
  sendGameCreated,
  sendGameDeleted,
  sendGameUpdated,
} = require("../controllers/games");
const { checkAuth } = require("../middlewares/auth");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findAllGames, findGameById, sendGameById);
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
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

module.exports = gamesRouter;
