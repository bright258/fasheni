const jwt = require("jsonwebtoken");

const { SECRET_KEY } = process.env;

const verify = (req, res, next) => {
  //   console.log(req.headers);
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).json({ message: "You are not authorized" });
  }
  const mainToken = token.split(" ")[1];
  jwt.verify(mainToken, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "You are not authorized" });
    }
    next();
  });
};

module.exports = { verify };
