const { getByEmail } = require('../model/index');

const reg = new RegExp(/^[^\s@]+@[^\s@]+.[^\s@]+$/);

const lessThanEight = (value) => (value.length <= 8);
const validEmail = (value) => (!reg.test(value));
const requiredInput = (value) => (!value);
const lessThanSix = (value) => (value.length < 6);
const doubleEmail = async (value) => {
  const result = await getByEmail(value);
  if (result) return true; 
  return false;
};

const lessThanEightError = {
  code: 400,
  message: '"displayName" length must be at least 8 characters long',
};
const validEmailError = {
  code: 400,
  message: '"email" must be a valid email',
};
const requiredEmailError = {
  code: 400,
  message: '"email" is required',
};
const lessThanSixError = {
  code: 400,
  message: '"password" length must be 6 characters long',
};
const requiredPasswordError = {
  code: 400,
  message: '"password" is required',
};
const doubleEmailError = {
  code: 409,
  message: 'User already registered',
};

const validatorTwo = (data) => {
  switch (true) {
    case requiredInput(data.password): return requiredPasswordError;
    case lessThanSix(data.password): return lessThanSixError;
    default: return {};
  } 
};

const validator = async (data) => {
  switch (true) {
    case lessThanEight(data.displayName): return lessThanEightError;
    case requiredInput(data.email): return requiredEmailError;
    case validEmail(data.email): return validEmailError;
    case await doubleEmail(data.email): return doubleEmailError;
    default: return validatorTwo(data);
  } 
};

module.exports = { validator };