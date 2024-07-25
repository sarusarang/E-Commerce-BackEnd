const express = require('express')
const UserController = require('../Controllers/UserController')
const ProductController = require('../Controllers/ProductController')
const CartController = require('../Controllers/CartController')
const OrderController = require('../Controllers/OrderController')
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
router.get('/showcart/:id', CartController.ShowCart)


// Delete Cart
router.delete('/deletecart/:id', CartController.RemoveCart)


// Place a ORDER 
router.post('/addorder',OrderController.PlaceOrder)

// Show User order 
router.get('/userorder/:id',OrderController.UserOrder)

// Cancel User order 
router.put('/ordercancel/:id',OrderController.CancelOrder)

// all orders
router.get('/allorder',OrderController.AllOrders)

module.exports = router