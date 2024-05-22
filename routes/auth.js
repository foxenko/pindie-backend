const { login } = require("../controllers/auth");
const { sendMe } = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth");

const authRouter = require("express").Router();

authRouter.post("/auth/login", login);
authRouter.get("/auth/me", checkAuth, sendMe);

module.exports = authRouter;
