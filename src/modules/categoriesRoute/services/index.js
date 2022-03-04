const model = require('../model');

const category = require('../authentication');

const newCategory = async (data) => {
  const valResult = await category.validator(data);
  if (valResult.message) return valResult;
  return model.createCategory(data);
};

const getCategories = async () => model.getCategories();

module.exports = { newCategory, getCategories };