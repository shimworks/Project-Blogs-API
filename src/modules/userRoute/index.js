const express = require('express');

const userRoute = express.Router();

const { createUser, login, getUser, getUserById } = require('./controller');

const { tokenValidation } = require('../global/middleware/tokenVal');

userRoute.post('/user', createUser);
userRoute.post('/login', login);
userRoute.get('/user', tokenValidation, getUser);
userRoute.get('/user/:id', tokenValidation, getUserById);

module.exports = userRoute;