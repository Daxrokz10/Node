const express = require('express');
const router = express.Router();
const productRouter = require('./product.router');

router.use('/',productRouter);
module.exports = router;
