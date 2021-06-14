'use strict'

const Products = require('../models/products.model')
const Users = require('../models/pickeatUsers.model')

exports.getStatsUsers = async (req, res, next) => {
    try {
        const totalUsers = await Users.totalUsersNumber()
        const confirmedUsers = await Users.confirmedUsersNumber()
        const registeredUsers = await Users.registeredUsersNumber()
        return res.json({users_total: totalUsers, confirmed_users: confirmedUsers, registered_users: registeredUsers})
    } catch (error) {
        next(error)
    }
}
