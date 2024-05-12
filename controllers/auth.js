const users = require("../models/users");
const jwt = require("jsonwebtoken");

const login = (res, req) => {
  const { email, password } = req.body;
  users
    .findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign(email, "group26", {
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

module.exports = { login };
