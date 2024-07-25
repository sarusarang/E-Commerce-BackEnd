const mongoose = require('mongoose')


const OrderSechema = new mongoose.Schema({

    UserId: {

        required: true,
        type: String
    },
    Username: {

        required: true,
        type: String
    },
    Phone: {

        required: true,
        type: String
    },
    Quanity: {

        required: true,
        type: String
    },
    Address: {

        required: true,
        type: String
    },
    Payment: {

        required: true,
        type: String
    },
    Status: {

        required: true,
        type: String
    },
    ProductName: {

        required: true,
        type: String
    },
    Color: {

        required: true,
        type: String
    },
    Size: {

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
    orderDate: {
        type: Date,
        default: Date.now
    },
    Cancel: {
        type: Boolean,
        required:true
    }


})

const Order = mongoose.model('Order', OrderSechema)

module.exports = Order