const router = require('express').Router();
const authenticate = require('./../auth/globalAuth');
const controller = require('./products.controller');

router.use(authenticate.bearerAuth);

console.log('productsRoute');
router.get('/', controller.viewItems);

module.exports = router