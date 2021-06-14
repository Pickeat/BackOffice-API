'use strict'

const express = require('express')
const router = express.Router()
const productsController = require('../../controllers/products.controller')
const auth = require('../../middlewares/authorization')

router.get('/list', auth(['admin']), productsController.getProducts)

module.exports = router
