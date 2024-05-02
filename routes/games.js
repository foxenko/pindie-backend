const gamesRouter = require("express").Router();
const {
  findAllGames,
  findGameById,
  createGame,
  deleteGame,
} = require("../middlewares/games");
const { sendAllGames, sendGameCreated, sendGameDeleted } = require("../controllers/games");
const { sendGameById } = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", findAllGames, createGame, sendGameCreated);

gamesRouter.delete(
  "/games/:id",
  deleteGame,
  sendGameDeleted 
);

module.exports = gamesRouter;
