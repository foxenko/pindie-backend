const usersRouter = require("express").Router();

const findAllUsers = require("../middlewares/users");
const sendAllUsers = require("../controllers/users");

usersRouter.get("/games", findAllUsers, sendAllUsers);

module.exports = usersRouter;
