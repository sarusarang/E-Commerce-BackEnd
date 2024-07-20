const mongoose = require('mongoose')

const UserSechema = new mongoose.Schema({



    name: {

        required: true,
        type: String

    },

    email: {

        required: true,
        type: String


    },

    password: {

        required: true,
        type: String


    },



})

const UserInfo = mongoose.model('UserInfo',UserSechema)

module.exports = UserInfo