'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({

}, {
})

productSchema.statics = {
    async listProducts () {
        const res =  await this.find({})
        console.log(res)
       return ("hello")
    },
}

module.exports = mongoose.model('Announce', productSchema)
