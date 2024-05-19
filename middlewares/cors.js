const allowedCors = [
  "localhost:3000",
  "localhost:3001",
  "https://practicum.yandex.ru",
  "https://students-projects.ru",
];
cors = (req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  next();
};

module.exports = cors;
