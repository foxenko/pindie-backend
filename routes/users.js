const usersRouter = require("express").Router();

const findAllUser = require("../middlewares/users");
const sendAllUsers = require("../controllers/users");

usersRouter.get("/games", findAllCategories, sendAllCategories);

module.exports = usersRouter;
