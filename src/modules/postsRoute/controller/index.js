const services = require('../services');

const newPost = async (req, res) => {
  const data = req.body;
  const result = await services.newPost(data);
  if (result.message) return res.status(result.code).json({ message: result.message });
  return res.status(201).json(result);
};

const getPost = async (req, res) => {
  const data = req.body.auth;
  const result = await services.getPost(data);
  return res.status(200).json(result);
};

module.exports = { newPost, getPost };