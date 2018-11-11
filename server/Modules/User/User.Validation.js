const Joi = require('joi');

const regEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

module.exports.passwordReg = regEx;

module.exports.signup = {
    signup: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().regex(regEx).required(),
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            userName: Joi.string().required(),
        },
    },
};