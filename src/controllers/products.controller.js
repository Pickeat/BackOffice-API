'use strict'

const Products = require('../models/products.model')

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Products.listProducts()
        return res.json({products_number: products.length, products: products})
    } catch (error) {
        next(error)
    }
}
