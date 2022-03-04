const { User } = require('../../../sequelize/models');

const create = async (data) => {
  await User.create(data);
};

const getByEmail = async (data) => {
  const find = await User.findOne({
    where: { email: data },
  });
  return find;
};

const getById = async (data) => User.findOne({ where: { id: data } });

const getAllUsers = async () => User.findAll();

module.exports = { create, getByEmail, getAllUsers, getById };