'use strict'
const mongoose = require('../services/mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({

}, {
})

productSchema.statics = {
    async listProducts () {
        const productsList =  await this.find({})
       return (productsList)
    },
}

module.exports = mongoose.pickeat_conn.model('Announce', productSchema)
