'use strict'

const express = require('express')
const router = express.Router()
const productsController = require('../../controllers/products.controller')
const auth = require('../../middlewares/authorization')

router.get('/list', auth(['user', 'admin']), productsController.getProducts)
router.post('/edit/:id', auth(['users', 'admin']), productsController.editProduct)

module.exports = router
