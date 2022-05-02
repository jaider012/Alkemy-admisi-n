const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const generateToken = (user) => {
  return jwt.sign({ user: user.id }, SECRET, { expiresIn: "7d" });
};
const verifyToken = (token) => {
  return jwt.verify(token, SECRET);
};

module.exports = { generateToken, verifyToken };
