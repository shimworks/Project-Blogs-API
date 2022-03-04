const express = require('express');

const postsRoute = express.Router();

const { newPost, getPost } = require('./controller');

const { tokenValidation } = require('../global/middleware/tokenVal');

postsRoute.post('/', tokenValidation, newPost);
postsRoute.get('/', tokenValidation, getPost);

module.exports = postsRoute;