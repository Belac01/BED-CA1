// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');

const controller = require('../controllers/taskProgressController');

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################

// Creates a task progress which equals completed a task
router.post('/', controller.createNewTaskProgress);

// Retrieve the information of a completed task
router.get('/:id', controller.readTaskById);

// Updates the information of a compelted task
router.put('/:id', controller.updateTaskProgressById);

// Delete the completed task
router.delete('/:id', controller.deleteTaskProgressById);

// Section B endpoint
// Retrieve all the tasks information the user has compelted
router.get('/users/:id', controller.readTaskByUserId);

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;