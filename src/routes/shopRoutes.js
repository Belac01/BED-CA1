// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');

const controller = require('../controllers/shopController');

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################

// Section B endpoints
// Creating a new item in the shop
router.post('/', controller.createNewShop);

// Retrieve the item information in the shop
router.get('/', controller.readAllShop);
router.get('/:id', controller.readShopById);

// Updating the details of items in the shop
router.put('/:id', controller.updateShopById);

// Deleting an item from the shop
router.delete('/:id', controller.deleteShopById);

// User buys an item from the shop
router.post('/buy/:userId/:itemId', controller.buyItem);

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;