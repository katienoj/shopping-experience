const express = require('express');
const router = express.Router();
const passport = require('passport');

const cartController = require('../../controllers/cart');
const authenticate = passport.authenticate('jwt',{session: false});

// Creates new Cart for user with the userId
router.post('/createCart', authenticate, cartController.createNewCart);

// Add Product to the user Cart
// :id = cartId
router.put('/addProductToCart/:id', authenticate, cartController.addProductToCart);

// Delete Product from the user Cart
// :id = cartId
router.put('/deleteProductFromCart/:id', authenticate, cartController.deleteProductFromCart);

// Delete all products from the user Cart
// :id = cartId
router.put('/deleteAllProducts/:id', authenticate, cartController.deleteAllProductsFromCart);

// Get cart by id
// :id = cartId
router.get('/:id', authenticate, cartController.getCartById);

// Check if the User has a cart
// :id = userId
router.get('/checkIfUserHasCart/:id', authenticate, cartController.checkIfUserHasCart);

// :id = cartId
router.put('/updateCartStatus/:id', authenticate, cartController.updateCartStatus);

// :id = cartId
router.put('/setCartTotalPrice/:id', cartController.setCartTotalPrice);

module.exports = router;
