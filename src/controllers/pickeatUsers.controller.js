'use strict'

const PickeatUsers = require('../models/pickeatUsers.model')

exports.getUsers = async (req, res, next) => {
    try {
        const users = await PickeatUsers.listUsers()
        return res.json({users_number: users.length, users: users})
    } catch (error) {
        next(error)
    }
}

exports.editUsers = async (req, res, next) => {
    try {
        const ret = await PickeatUsers.editUser(req.body, req.params.id);
        return res.json(ret)
    } catch (error) {
        next(error)
    }
}
