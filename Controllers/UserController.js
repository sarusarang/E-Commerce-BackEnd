const UserInfo = require('../Models/UserModel')
const jwt = require('jsonwebtoken')




// USER REGISTER
exports.Register = async (req, res) => {


    try {


        const { name, email, password } = req.body


        const ExistingUser = await UserInfo.findOne({ email })

        if (ExistingUser) {

            res.status(401).json("User Already Exist")

        }
        else {

            const NewUser = new UserInfo({

                name, email, password

            })

            await NewUser.save()
            const token = jwt.sign({ name: NewUser.name, email: NewUser.email, userid: NewUser._id }, process.env.Secret_key)
            const Details = { token, user: NewUser.name, _id: NewUser._id }
            res.status(200).json(Details)


        }


    } catch (err) {

        console.log(err);

    }



}


// USER LOGIN
exports.Login = async (req, res) => {


    try {


        const { email, password } = req.body

        const ExistingUser = await UserInfo.findOne({ email, password })

        if (ExistingUser) {


            const token = jwt.sign({ name: ExistingUser.name, email: ExistingUser.email, _id: ExistingUser._id }, process.env.Secret_key)
            const Details = { token, user: ExistingUser.name, _id: ExistingUser._id }
            res.status(200).json(Details)


        }
        else {

            res.status(406).json("INVAILD USERNAME OR PASSWORD")

        }


    }
    catch (err) {

        console.log(err);


    }

}


