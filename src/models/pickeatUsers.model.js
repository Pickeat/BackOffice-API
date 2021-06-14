'use strict'
const mongoose = require('../services/mongoose')
const Schema = mongoose.Schema

const pickeatUsersSchema = new Schema({

}, {
})

pickeatUsersSchema.statics = {
    async listUsers () {
        const usersList = await this.find({})
        return (usersList)
    },

    async totalUsersNumber () {
        const usersList = await this.find({})
        return (usersList.length)
    },

    async confirmedUsersNumber () {
        const usersList = await this.find({status: "confirmed"})
        return (usersList.length)
    },
    async registeredUsersNumber () {
        const usersList = await this.find({status: "registered"})
        return (usersList.length)
    }
}

module.exports = mongoose.pickeat_conn.model('User', pickeatUsersSchema)
