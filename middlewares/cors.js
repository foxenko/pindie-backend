const allowedCors = [
  "https://pindie1frontend.nomoredomainswork.ru",
  "https://pindie1backend.nomoredomainswork.ru",
  "http://pindie1frontend.nomoredomainswork.ru",
  "http://pindie1backend.nomoredomainswork.ru",
  "http://pindie1frontend.nomoredomainswork.ru:443",
  "http://pindie1backend.nomoredomainswork.ru:443",
  "https://practicum.yandex.ru",
  "https://students-projects.ru",
];
cors = (req, res, next) => {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
  );
  next();
};

module.exports = cors;
