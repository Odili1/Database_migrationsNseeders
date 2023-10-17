const router = require("express").Router();
const controller = require("./productsControllers");
const auth = require("../middlewares/global.middleware");

router.use(auth.bearerTokenAuth);


router.get('/', controller.viewItems);

module.exports = router
