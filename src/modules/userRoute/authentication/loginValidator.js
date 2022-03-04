const { getByEmail } = require('../model/index');

const noEmptyInput = (value) => (value === '');
const requiredInput = (value) => (value === undefined);
const checkUser = async (value) => {
  const result = await getByEmail(value);
  if (result === null) return true;
  return false;
};

const noEmptyEmailError = {
  code: 400,
  message: '"email" is not allowed to be empty',
};
const noEmptyPasswordError = {
  code: 400,
  message: '"password" is not allowed to be empty',
};
const requiredEmailError = {
  code: 400,
  message: '"email" is required',
};
const requiredPasswordError = {
  code: 400,
  message: '"password" is required',
};
const invalidInputError = {
  code: 400,
  message: 'Invalid fields',
};

const validatorTwo = async (data) => {
  switch (true) {
    case await checkUser(data.email): return invalidInputError;
    default: return {};
  } 
};

const validator = (data) => {
  switch (true) {
    case requiredInput(data.email): return requiredEmailError;
    case requiredInput(data.password): return requiredPasswordError;
    case noEmptyInput(data.email): return noEmptyEmailError;
    case noEmptyInput(data.password): return noEmptyPasswordError;
    default: return validatorTwo(data);
  } 
};

module.exports = { validator };