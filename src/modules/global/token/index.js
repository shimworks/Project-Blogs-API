const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;
const jwtConfig = {};

const newToken = (data) => {
  const token = jwt.sign(data, SECRET, jwtConfig);
  return token;
};

const valToken = (token) => {
  try {
    const verToken = jwt.verify(token, SECRET);
    return verToken;
  } catch (err) {
    return err;
  }
};

module.exports = { newToken, valToken };