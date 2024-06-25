// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');

const controller = require('../controllers/userController');
const middleware = require('../middlewares/middleware');

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################

// Creating a new user
router.post('/', middleware.checkEmailExistence, middleware.checkUsernameExistence, controller.createNewUser);

// Retrieve the user information
router.get('/', controller.readAllUser);
router.get('/:id', controller.readUserById);

// Updating the user information
router.put('/:id', middleware.checkUserById, middleware.checkEmailExistence, middleware.checkUsernameExistence, controller.updateUserById);

// Deleting a user
router.delete('/:id', controller.deleteUserById);

// Section B endpoints
// Retrieve a user wallet information to check balance
router.get('/:id/wallet', controller.readUserWallets);

// Retrieve the user profile which contains every information the user has
router.get('/:id/profile', controller.readUserProfile);

// Retrieve the user inventory
router.get('/:id/inventory', controller.readUserInventory);

// Delete an item from the user inventory
router.delete('/:id/inventory/:inventoryid', controller.deleteUserInventoryById);

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;