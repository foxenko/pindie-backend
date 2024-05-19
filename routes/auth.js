const { login } = require("../controllers/auth");
const { sendMe } = require("../controllers/users");

const authRouter = require("express").Router();

authRouter.post("/auth/login", login);
// authRouter.get("/auth/me", Authorize, sendMe);

module.exports = authRouter;
