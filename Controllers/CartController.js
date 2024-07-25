const Cart = require('../Models/CartModel')



exports.AddCart = async (req, res) => {


    try {

        const { user, product ,name,price ,image,gender,category } = req.body

    
        const existingproduct = await Cart.findOne({ ProductId: product })

        if (existingproduct) {

            res.status(406).json("Product already added to Cart...!")

        } else {

            const newcart = new Cart({

                UserId: user, ProductId: product ,ProductName:name , Price:price ,Image:image , Gender:gender , Category:category

            })

            

            await newcart.save()
            res.status(200).json(newcart)


        }


    }

    catch (err) {


        console.log(err);
        res.status(406).json("Unexpected Error..!")

    }

}




exports.ShowCart = async (req, res) => {


    try {

        const {id} = req.params

       
        const Result = await Cart.find({UserId:id})

        if(Result){

            res.status(200).json(Result)

        }else{


            res.status(406).json("Couldn't retrive data...!")

        }


    }
    catch (err) {


        console.log(err);

    }

}




exports.RemoveCart = async (req, res) => {


    try {


        const { id } = req.params

        const dele = await Cart.findOneAndDelete({_id:id})

        res.status(200).json(dele)

    }
    catch (err) {


        console.log(err);
        res.status(406).json("ERROR")

    }

}