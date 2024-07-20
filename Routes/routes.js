const express = require ('express')
const UserController = require('../Controllers/UserController')

const router = express.Router()



// User register
router.post('/register',UserController.Register)


// User Login
router.post('/login',UserController.Login)



module.exports = router