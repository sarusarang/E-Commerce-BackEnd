const mongoose = require('mongoose')


const CartSechma = new mongoose.Schema({


    UserId: {

        required: true,
        type: String

    },
    ProductId: {

        required: true,
        type: String

    }

})

const Cart = mongoose.model('Cart',CartSechma)

module.exports =  Cart