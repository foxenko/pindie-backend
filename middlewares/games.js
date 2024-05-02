const games = require("../models/games");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games
    .find({})
    .populate("categories")
    .populate("users");
  next();
};

const findGameById = async (req, res, next) => {
  try {
    req.game = await games.findById(req.params.id);
    next();
  } catch (error) {
    res.status(404).send({ message: "Game not found" });
  }
};

const createGame = async (req, res, next) => {
  console.log("POST /games");
  try {
    console.log(req.body);
    req.game = await games.create(req.body);
    next();
  } catch (error) {
    res.status(400).send("Error creating game");
  }
};

module.exports = { findAllGames, findGameById, createGame };

// const findAllGames = async (req, res, next) => {
//   req.gamesArray = await games.find({});
//   next();
// };
