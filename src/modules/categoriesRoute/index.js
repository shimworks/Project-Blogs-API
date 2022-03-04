const express = require('express');

const categoriesRoute = express.Router();

const { newCategory, getCategories } = require('./controller');

const { tokenValidation } = require('../global/middleware/tokenVal');

categoriesRoute.post('/', tokenValidation, newCategory);
categoriesRoute.get('/', tokenValidation, getCategories);

module.exports = categoriesRoute;