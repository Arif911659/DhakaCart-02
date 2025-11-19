const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const cache = require('../middlewares/cache.middleware');

router.get('/', cache(30), productController.list);
router.get('/:id', cache(60), productController.getOne);
router.post('/', productController.create); // protect via RBAC in admin routes
router.put('/:id', productController.update);
router.delete('/:id', productController.remove);

module.exports = router;
