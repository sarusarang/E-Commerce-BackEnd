const Cloudinary = require ('cloudinary').v2


Cloudinary.config({

    cloud_name: process.env.Cloudinary_name,
    api_key:process.env.Cloudinary_api,
    api_secret: process.env.Cloudinary_api_Secret

})


module.exports = Cloudinary