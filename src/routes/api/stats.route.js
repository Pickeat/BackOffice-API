'use strict'
const express = require('express')
const router = express.Router()
const statsController = require('../../controllers/stats.controller')
const auth = require('../../middlewares/authorization')

router.get('/users', auth(['user', 'admin']), statsController.getStatsUsers)

module.exports = router
