const auth = require('../authentication/tokenValidator');

const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;
  const response = auth.validator(token);
  if (response.message) return res.status(response.code).json({ message: response.message });
  req.body.auth = response.email;
  return next();
};

module.exports = {
  tokenValidation,
};
