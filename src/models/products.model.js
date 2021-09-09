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
}

module.exports = mongoose.pickeat_conn.model('Announce', productSchema)
