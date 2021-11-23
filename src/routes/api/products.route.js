'use strict'

const express = require('express')
const router = express.Router()
const productsController = require('../../controllers/products.controller')
const auth = require('../../middlewares/authorization')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/list', auth(['user', 'admin']), productsController.getProducts)
router.post('/edit/:id', auth(['users', 'admin']), productsController.editProduct)
router.post('/edit/product_picture/:id', auth(['user', 'admin']), upload.single('file'), productsController.editProductPicture)
router.delete('/delete/:id', auth(['user', 'admin']), productsController.deleteProduct)
module.exports = router
