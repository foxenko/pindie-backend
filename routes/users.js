const usersRouter = require("express").Router();
const {
  findAllUsers,
  findUserById,
  createUser,
  deleteUser,
  updateUser,
} = require("../middlewares/users");
const {
  sendAllUsers,
  sendUserById,
  sendUserCreated,
  sendUserDeleted,
  sendUserUpdated,
} = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/users/:id", findUserById, sendUserById);
usersRouter.post("/users", findAllUsers, createUser, sendUserCreated);
usersRouter.put("/users/:id", updateUser, sendUserUpdated);
usersRouter.delete("/users/:id", deleteUser, sendUserDeleted);

module.exports = usersRouter;
