const { Category } = require('../../../sequelize/models');

const createCategory = async (data) => Category.create(data);

const getCategories = async () => Category.findAll();

const getCategoriesById = async (data) => Category.findOne({ where: { id: data } });

module.exports = { createCategory, getCategories, getCategoriesById };