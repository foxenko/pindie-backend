const users = require("../models/users");
const jwt = require("jsonwebtoken");
const path = require("path");

const login = (res, req) => {
  const { email, password } = req.body;
  users
    .findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(email, "group-twenty-six", {
        expiresIn: 3600,
      });
      return { user, token };
    })
    .then((user) => {
      res
        .status(200)
        .send({ _id: user._id, username: user.username, email: user.email });
    })
    .catch((error) => {
      res.status(401).send({ message: error.message });
    });
};

const sendIndex = (req, res) => {
  if (req.cookies.jwt) {
    try {
      jwt.verify(req.cookies.jwt, "group-twenty-six");
      return res.redirect("/admin/dasboard");
    } catch (error) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    }
  }
};

const sendDashboard = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/admin/dashboard.html"));
};

module.exports = { login, sendIndex, sendDashboard };
