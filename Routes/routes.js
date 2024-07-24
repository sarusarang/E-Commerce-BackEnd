const express = require('express')
const UserController = require('../Controllers/UserController')
const ProductController = require('../Controllers/ProductController')
const CartController = require('../Controllers/CartController')
const multer = require('../Middleware/Multer')


const router = express.Router()



// User register
router.post('/register', UserController.Register)


// User Login
router.post('/login', UserController.Login)


// Add Product
router.post('/addproduct', multer.array('image', 3), ProductController.AddProducts)


// Show ALL Product
router.get('/showproduct', ProductController.ShowProducts)


// Delete product
router.delete('/deleteproduct/:id', ProductController.DeleteProducts)


// Add To Cart
router.post('/addcart', CartController.AddCart)


// Show Cart
router.get('/showcart', CartController.ShowCart)


// Delete Cart
router.delete('/showcart', CartController.RemoveCart)



module.exports = router