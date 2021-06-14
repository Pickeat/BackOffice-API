'use strict'

const PickeatUsers = require('../models/pickeatUsers.model')

exports.getProducts = async (req, res, next) => {
    try {
        const users = await PickeatUsers.listUsers()
        return res.json({ message: 'OK', users: users})
    } catch (error) {
        next(error)
    }
}
