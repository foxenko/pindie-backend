const gamesRouter = require("express").Router();
const { findAllGames, findGameById } = require("../middlewares/games");
const { sendAllGames } = require("../controllers/games");
const { sendGameById } = require("../controllers/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);

module.exports = gamesRouter;
