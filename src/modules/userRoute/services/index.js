const { newToken } = require('../../global/token');

const user = require('../authentication/newUserValidator');
const login = require('../authentication/loginValidator');
const userId = require('../authentication/userIdExistValidator');

const { create, getAllUsers } = require('../model/index');

const newUser = async (data) => {
  const valResult = await user.validator(data);
  if (valResult.message) return valResult;
  await create(data);
  const token = newToken(data);
  return token;
};

const newLogin = async (data) => {
  const valResult = await login.validator(data);
  if (valResult.message) return valResult;
  const token = newToken(data);
  return token;
};
const getUsers = async () => {
  const allUsers = await getAllUsers();
  return allUsers;
};

const getUserById = async (data) => {
  const valResult = await userId.validator(data);
  return valResult;
};

module.exports = { newUser, newLogin, getUsers, getUserById };