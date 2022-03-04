const { getById } = require('../model/index');

const userDontExistsError = {
  code: 404,
  message: 'User does not exist',
};

const validator = async (data) => {
  const result = await getById(data);
  if (result === null) return userDontExistsError;
  return result;
};

module.exports = { validator };