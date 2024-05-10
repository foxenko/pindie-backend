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

const updateGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка обновления игры" }));
  }
};

const deleteGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send({ message: "Error deleting game" });
  }
};

module.exports = {
  findAllGames,
  findGameById,
  createGame,
  updateGame,
  deleteGame,
};

// const findAllGames = async (req, res, next) => {
//   req.gamesArray = await games.find({});
//   next();
// };
