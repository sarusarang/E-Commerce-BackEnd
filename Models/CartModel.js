const mongoose = require('mongoose')


const CartSechma = new mongoose.Schema({


    UserId: {

        required: true,
        type: String

    },
    ProductId: {

        required: true,
        type: String

    },
    ProductName: {

        required: true,
        type: String

    },
    Price: {

        required: true,
        type: String

    },
    Image: {

        required: true,
        type: String

    },
    Gender: {

        required: true,
        type: String

    },
    Category: {

        required: true,
        type: String

    }


})

const Cart = mongoose.model('Cart',CartSechma)

module.exports =  Cart