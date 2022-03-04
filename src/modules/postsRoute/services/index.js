const model = require('../model');

const userModel = require('../../userRoute/model');

const post = require('../authentication');

const newPost = async (data) => {
  const { title, content, categoryIds } = data;
  const valResult = await post.validator(data);
  if (valResult.message) return valResult;
  const { dataValues: { id } } = await userModel.getByEmail(data.auth);
  const newData = { userId: id, title, content };
  const result = await model.createPost(newData, categoryIds);
  return result;
};

const getPost = async (data) => {
  const result = await model.getAllPostData(data);
  return result;
};

module.exports = { newPost, getPost };