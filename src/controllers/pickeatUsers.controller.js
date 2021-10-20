'use strict'

const PickeatUsers = require('../models/pickeatUsers.model');
const { minioUpload } = require('../services/minio');
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);

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

exports.editProfilePicture = async (req, res, next) => {
    try {
        if (!req.file) {
            res.status(401)
            res.json({"message": "Error no file found"})
            return
        }
        const file = req.file;
        try {
            // Upload file
            const name = await minioUpload(file, 'users');
            console.log(name)
            await PickeatUsers.editPictureLink(name, req.params.id)
            // Delete tmp copy
            await unlinkAsync(file.path);
            // req.user.image = name;
            // try {
            //     await req.user.save();
            // } catch (err) {
            //     logger.error('failed to change user image', errors.server.MONGODB_ERROR, { err });
            //     return logger.logAndRespond(res, errors.api.ServerError);
            // }
            const ret = {"Message": "Sucess !"}
            return res.json(ret)
        } catch (error) {
            await unlinkAsync(file.path);
            const ret = {"Message": "Error during picture update"}
            return res.json(ret)
        }
    } catch (error) {
        next(error)
    }
}
