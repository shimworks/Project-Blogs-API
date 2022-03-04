const { BlogPost } = require('../../../sequelize/models');

const createPost = async (data, categoryIds) => {
 const result = await BlogPost.create(data);
  await result.addCategories(categoryIds);
 return result;
};

const getAllPostData = async () => {
  const result = await BlogPost.findAll({ include: ['categories', 'user'] });
  return result;
};

module.exports = { createPost, getAllPostData };