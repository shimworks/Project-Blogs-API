const express = require('express');

const route = express.Router();

const userRoute = require('./userRoute');
const categoriesRoute = require('./categoriesRoute');
const postsRoute = require('./postsRoute');

route.use('/categories', categoriesRoute);
route.use('/post', postsRoute);
route.use('/', userRoute);

module.exports = route;