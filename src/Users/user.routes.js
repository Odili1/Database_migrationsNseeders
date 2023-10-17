const router = require('express').Router();
const controller = require('./user.controllers')


router.post('signUp', controller.SignUp);

router.post('login', controller.Login);


module.exports = router