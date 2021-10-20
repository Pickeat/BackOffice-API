'use strict'

const Products = require('../models/products.model')
const {minioUpload} = require("../services/minio");
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Products.listProducts()
        return res.json({products_number: products.length, products: products})
    } catch (error) {
        next(error)
    }
}

exports.editProduct = async (req, res, next) => {
    try {
        const ret = await Products.editProduct(req.body, req.params.id);
        return res.json(ret)
    } catch (error) {
        next(error)
    }
}
exports.editProductPicture = async (req, res, next) => {
    try {
        if (!req.file || !req.params.id) {
            res.status(401)
            res.json({"message": "Error no file found"})
            return
        }
        const file = req.file;
        console.log(req.params.id)
        try {
            // Upload file
            const name = await minioUpload(file, 'products');
            console.log(name)
            await Products.editPictureLink(name, req.params.id)
            // Delete tmp copy
            await unlinkAsync(file.path);
            const ret = {"Message": "Sucess !"}
            return res.json(ret)
        } catch (error) {
            await unlinkAsync(file.path);
            const ret = {"Message": "Error during picture update"}
            return res.json(ret)
        }
    } catch (error) {
        next(error)
    }
}
