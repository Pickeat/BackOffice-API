'use strict'

const Announces = require('../models/products.model')
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

exports.getStatsAnnounces = async (req, res, next) => {
    try {
        const totalAnnounces = await Announces.totalAnnouncesNumber()
        const availableAnnounces = await Announces.availableAnnouncesNumber()
        const waitingForReservationAnnounces = await Announces.waitingForReservationAnnouncesNumber()
        const givenAnnounces = await Announces.givenAnnouncesNumber()
        const notedAnnounces = await Announces.notedAnnouncesNumber()
        const deletedAnnounces = await Announces.deletedAnnouncesNumber()
        return res.json({announces_total: totalAnnounces, available_announces: availableAnnounces,
        waiting_for_reservation_announces: waitingForReservationAnnounces, given_announces: givenAnnounces,
        noted_announces: notedAnnounces, deleted_announces: deletedAnnounces})
    } catch (error) {
        next(error)
    }
}
