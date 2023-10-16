const joi = require('joi');

exports.validateSignup = async (req, res, next) => {
    try {
        const Schema = joi.object({
            fullname: joi.string().required(),
            username: joi.string().required(),
            email: joi.string().email().required(),
            phone_number: joi.string().required(),
            password: joi.string().required(),
            gender: joi.string().required().valid("male", "female"),
            country: joi.string().required()
        });

        await Schema.validateAsync(req.body, {abortEarly: true})

        next()
    } catch (error) {
        return res.status(422).json({
            message: error.message,
            success: false
        })
    }
}


exports.validateLogin = async(req, res, next) => {
    try {
        const Schema = joi.object({
            username: joi.string().required(),
            password: joi.string().required(),
        })

        await Schema.validateAsync(req.body, {abortEarly: true})

        next()
    } catch (error) {
        return res.status(422).json({
            message: error.message,
            success: false
        })
    }
}