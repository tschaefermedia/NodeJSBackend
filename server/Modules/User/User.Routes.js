const {Router} = require('express');
const validate = require('express-validation');

const {authLocal} = require('../../Services/Auth.Service');
const userController = require('./User.Controllers');
const userValidation = require( './User.Validation');

const routes = new Router();

routes.post('/signup', validate(userValidation.signup), userController.signUp);
routes.post('/login', authLocal, userController.login);

module.exports = routes;