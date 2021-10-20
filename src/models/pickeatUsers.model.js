'use strict'
const mongoose = require('../services/mongoose')
const Schema = mongoose.Schema

const pickeatUsersSchema = new Schema({

}, {strict: false})

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
    },
    async editUser (body, id) {
        const ret =  await this.findOneAndUpdate({_id: id}, body, {upsert: false, new: true}, function (err, res) {
            console.log(res)
        })
        return (ret)
    },
    async editPictureLink (image, id) {
        let user = await this.findById(id)
        let userInfos = JSON.parse(JSON.stringify(user))
        userInfos["image"] = image
        const ret =  await this.findOneAndUpdate({_id: id}, userInfos, {upsert: false, new: true}, function (err, res) {
            console.log(res)
        })
        return (ret)
    }
}

module.exports = mongoose.pickeat_conn.model('User', pickeatUsersSchema)
