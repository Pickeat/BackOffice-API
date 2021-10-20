'use strict'

const express = require('express')
const router = express.Router()
const pickeatUsersController = require('../../controllers/pickeatUsers.controller')
const auth = require('../../middlewares/authorization')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/list', auth(['user', 'admin']), pickeatUsersController.getUsers)
router.post('/edit/:id', auth(['user', 'admin']), pickeatUsersController.editUsers)
router.post('/edit/user_picture/:id', auth(['user', 'admin']), upload.single('file'), pickeatUsersController.editProfilePicture)
module.exports = router
