const mongoose = require('mongoose')

const variantSchema = new mongoose.Schema({
    color: { type: String, required: true },
    Image: { type: String, required: true }
});


const ProductSechema = new mongoose.Schema({


    ProductName: {

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

    },
    Price: {

        required: true,
        type: String

    },
    Description: {

        required: true,
        type: String

    },
    variants: [variantSchema]

})

const Products = mongoose.model('Products', ProductSechema)

module.exports = Products