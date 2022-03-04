const services = require('../services');

const newCategory = async (req, res) => {
  const data = req.body;
  const result = await services.newCategory(data);
  if (result.message) return res.status(result.code).json({ message: result.message });
  return res.status(201).json(result);
};

const getCategories = async (_req, res) => {
  const result = await services.getCategories();
  return res.status(200).json(result);
};

module.exports = { newCategory, getCategories };