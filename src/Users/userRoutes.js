const router = require('express').Router();
const controller = require('./userControllers')


router.post('signUp', controller.SignUp);

router.post('login', controller.Login);


module.exports = router