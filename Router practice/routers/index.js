const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/',productController.home);
router.get('/products',productController.showAddProduct);
router.post('/products',productController.addProduct);

module.exports = router;
