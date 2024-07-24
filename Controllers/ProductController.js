const Products = require('../Models/ProductModel')
const Cloudinary = require('../Utils/Cloudinary')


exports.AddProducts = async (req, res) => {



    try {

        const { name, gender, category, price, description, color } = req.body



        const files = req.files



        let variants = [];

        for (let i = 0; i < files.length; i++) {

            const filePath = files[i].path

            const uploadResult = await Cloudinary.uploader.upload(filePath);

            if (!uploadResult) {
                return res.status(500).send("Error uploading image to Cloudinary");
            }

            variants.push({ color: color[i], Image: uploadResult.url });
        }


        const newproducts = new Products({ ProductName: name, Gender: gender, Category: category, Price: price, Description: description, variants: variants })

        await newproducts.save()
        res.status(200).json("Product added successfully...!")


    }
    catch (err) {


        console.log(err);
        res.status(406).json("Empty Color Feild...!!")


    }

}

exports.ShowProducts = async (req, res) => {

    try {

        const result = await Products.find()

        if (result) {

            res.status(200).json(result)

        }

    }
    catch (err) {

        console.log(err)

    }



}

exports.DeleteProducts = async (req, res) => {



    try {


        const { id } = req.params

        const resdele = await Products.deleteOne({ _id: id })

        res.status(200).json(resdele)

    }
    catch (err) {


        console.log(err);


    }

}