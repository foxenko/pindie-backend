const usersRouter = require("express").Router();
const { findAllUsers, findUserById } = require("../middlewares/users");
const { sendAllUsers, sendUserById } = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);

module.exports = usersRouter;
