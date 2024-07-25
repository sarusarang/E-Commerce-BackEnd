const Order = require('../Models/OrderModel')



exports.PlaceOrder = async (req, res) => {


    try {


        const { UserId, Username, Phone, Quanity, Address, Payment, Status, Productname, Color, Size, TotalPrice, image, gender, Cancel } = req.body


        const neworder = new Order({

            UserId: UserId, Username: Username, Phone: Phone, Quanity: Quanity, Address: Address, Payment: Payment, Status: Status, ProductName: Productname, Color: Color, Size: Size, Price: TotalPrice, Image: image, Gender: gender, Cancel: Cancel

        })

        await neworder.save()
        res.status(200).json("Order Placed...!")


    }
    catch (err) {

        console.log(err);
        res.status(406).json("error")

    }


}



exports.UserOrder = async (req, res) => {


    try {

        const { id } = req.params

        const result = await Order.find({ UserId: id })

        if (result) {

            res.status(200).json(result)

        }

    }
    catch (err) {

        console.log(err);


    }


}

exports.CancelOrder = async (req, res) => {


    try {

        const { id } = req.params

        const Result = await Order.findOneAndUpdate({ _id: id }, { $set: { Cancel: true } }, { new: true })

        if (!Result) {

            res.status(406).json("Order not foung")

        }
        res.status(200).json(Result)


    }
    catch (err) {

        console.log(err);

    }


}


exports.AllOrders = async (req, res) => {


    try {


        const Result = await Order.find()

        if (Result) {

            res.status(200).json(Result)

        }

       



    }
    catch (err) {

        console.log(err);


    }


}