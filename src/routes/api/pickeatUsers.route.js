'use strict'

const express = require('express')
const router = express.Router()
const pickeatUsersController = require('../../controllers/pickeatUsers.controller')
const auth = require('../../middlewares/authorization')

router.get('/list', auth(['user', 'admin']), pickeatUsersController.getUsers)

module.exports = router
