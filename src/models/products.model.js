'use strict'
const mongoose = require('../services/mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
}, { strict: false })

productSchema.statics = {
    async listProducts () {
        const productsList =  await this.find({})
       return (productsList)
    },

    async totalAnnouncesNumber () {
        const productsList =  await this.find({})
        return (productsList.length)
    },

    async availableAnnouncesNumber () {
        const productsList =  await this.find({status: "available"})
        return (productsList.length)
    },

    async waitingForReservationAnnouncesNumber () {
        const productsList =  await this.find({status: "waiting-for-reservation"})
        return (productsList.length)
    },

    async givenAnnouncesNumber () {
        const productsList =  await this.find({status: "given"})
        return (productsList.length)
    },

    async notedAnnouncesNumber () {
        const productsList =  await this.find({status: "noted"})
        return (productsList.length)
    },

    async deletedAnnouncesNumber () {
        const productsList =  await this.find({status: "deleted"})
        return (productsList.length)
    },

    async editProduct (body, id) {
        console.log(body)
        const productsList =  await this.findOneAndUpdate({_id: id}, body, {upsert: false, new: true}, function (err, res) {
            console.log(res)
        })
        return (productsList)
    },

    async deleteProduct (id) {
        console.log(id)
        const productsList =  await this.findById(id)
        console.log(productsList)
        productsList.remove()
        //const swap = new (mongoose.deleteds_conn.model('Announce'))(productsList)
        //swap.save()
        return (productsList)
    },

    async editPictureLink (image, id) {
        let product = await this.findById(id)
        let productInfos = JSON.parse(JSON.stringify(product))
        productInfos["image"] = image
        const ret =  await this.findOneAndUpdate({_id: id}, productInfos, {upsert: false, new: true}, function (err, res) {
            console.log(res)
        })
        return (ret)
    }
}

module.exports = mongoose.pickeat_conn.model('Announce', productSchema)