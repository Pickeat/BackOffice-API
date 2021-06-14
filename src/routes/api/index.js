'use strict'
const express = require('express')
const router = express.Router()
const authRouter = require('./auth.route')
const productsRouter = require('./products.route')
const pickeatUsersRouter = require('./pickeatUsers.route')
const statsRouter = require('./stats.route')

router.get('/status', (req, res) => { res.send({status: 'OK'}) }) // api status

router.use('/auth', authRouter) // mount auth paths
router.use('/products', productsRouter)
router.use('/users', pickeatUsersRouter)
router.use('/stats', statsRouter)

module.exports = router
