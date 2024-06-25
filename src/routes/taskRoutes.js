// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');

const controller = require('../controllers/taskController');

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################

// Creating a new task
router.post('/', controller.createNewTask);

// Retrieve tasks information
router.get('/', controller.readAllTasks);
router.get('/:id', controller.readTaskById);

// Updating the task details
router.put('/:id', controller.updateTaskById);

// Deleting the task
router.delete('/:id', controller.deleteTaskById);

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;