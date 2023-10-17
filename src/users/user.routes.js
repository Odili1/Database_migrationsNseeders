const router = require("express").Router();
const controller = require("./user.controller");
const middleware = require("./user.middleware");


router.post("/signup", middleware.validateSignup, controller.createUser);

router.post("/login", middleware.validateLogin, controller.Login);

module.exports = router;
