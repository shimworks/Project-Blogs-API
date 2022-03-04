const { getCategoriesById } = require('../../categoriesRoute/model');

const requiredInput = (value) => (value === undefined);
const checkCategory = async (value) => {
  const result = await Promise.all(value.map((e) => getCategoriesById(e)));
  return result.some((e) => (e === null));
};

const requiredTitleError = {
  code: 400,
  message: '"title" is required',
};
const requiredContentError = {
  code: 400,
  message: '"content" is required',
};
const requiredCategoryIdsError = {
  code: 400,
  message: '"categoryIds" is required',
};
const requiredCategoryExistsError = {
  code: 400,
  message: '"categoryIds" not found',
};

const validator = async (data) => {
  switch (true) {
    case requiredInput(data.title): return requiredTitleError;
    case requiredInput(data.content): return requiredContentError;
    case requiredInput(data.categoryIds): return requiredCategoryIdsError;
    case await checkCategory(data.categoryIds): return requiredCategoryExistsError;
    default: return {};
  } 
};

module.exports = { validator };