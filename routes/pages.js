const { sendIndex, sendDashboard } = require("../controllers/auth");
const { checkAuth, checkCookiesJWT } = require("../middlewares/auth");

const pagesRouter = require("express").Router();

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);
pagesRouter.get("/", sendIndex);

module.exports = { pagesRouter };
