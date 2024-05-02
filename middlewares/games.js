const findAllGames = async (req, res, next) => {
  req.gamesArray = await games.find({});
  next();
};

module.exports = findAllGames;

// const games = require("../models/games");
// const findAllGames = async (req, res, next) => {
//   req.gamesArray = await games
//     .find({})
//     .populate("categories")
//     .populate("users");
//   next();
// };
