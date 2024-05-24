const mongoose = require("mongoose");
const categories = require("./categories");
const users = require("./users");

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: users,
    },
  ],
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: categories,
    },
  ],
});

gameSchema.statics.findGameByCategory = function (category) {
  return this.find({})
    .populate({
      path: "categories",
      match: { name: category },
    })
    .populate({
      path: "users",
      select: "-password",
    })
    .then((games) => {
      return games.filter((game) => game.categories.length > 0);
    });
};

gameSchema.statics.vote = async function (game, user) {
  try {
    const userExists = game.users.some((targetUser) =>
      targetUser._id.equals(user._id)
    );

    if (!userExists) {
      game.users.push(user._id);
      await game.save();
      return {
        success: true,
      };
    } else {
      return { success: true };
    }
  } catch {
    return {
      success: false,
    };
  }
};

module.exports = mongoose.model("games", gameSchema);
