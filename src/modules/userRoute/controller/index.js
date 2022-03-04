const services = require('../services');

const createUser = async (req, res) => {
  const data = req.body;
  const result = await services.newUser(data);
  if (result.message) return res.status(result.code).json({ message: result.message });
  return res.status(201).json({ token: result });
};

const login = async (req, res) => {
  const data = req.body;
  const result = await services.newLogin(data);
  if (result.message) return res.status(result.code).json({ message: result.message });
  return res.status(200).json({ token: result });
};

const getUser = async (_req, res) => {
  const result = await services.getUsers();
  return res.status(200).json(result);
};

const getUserById = async (req, res) => {
  const data = req.params.id;
  const result = await services.getUserById(data);
  if (result.message) return res.status(result.code).json({ message: result.message });
  return res.status(200).json(result);
};

module.exports = {
  createUser,
  login,
  getUser,
  getUserById,
};