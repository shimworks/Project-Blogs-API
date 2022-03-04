const { valToken } = require('../token');

const validTokenError = {
  code: 401,
  message: 'Expired or invalid token',
};
const requiredTokenError = {
  code: 401,
  message: 'Token not found',
};

const requiredInput = (value) => (value === '');
const validToken = (value) => {
  const result = valToken(value);
  if (result.iat) return result;
  return validTokenError;
};

const validator = (data) => {
  switch (true) {
    case requiredInput(data): return requiredTokenError;
    default: return validToken(data);
  } 
};

module.exports = { validator };