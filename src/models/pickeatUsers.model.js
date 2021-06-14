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
}

module.exports = mongoose.pickeat_conn.model('User', pickeatUsersSchema)
