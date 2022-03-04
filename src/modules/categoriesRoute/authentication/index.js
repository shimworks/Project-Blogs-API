const requiredNameError = {
  code: 400,
  message: '"name" is required',
};

const validator = (data) => {
  if (data.name === undefined) return requiredNameError;
  return {};
};

module.exports = { validator };