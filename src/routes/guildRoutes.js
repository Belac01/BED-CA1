// ##############################################################
// REQUIRE MODULES
// ##############################################################
const express = require('express');

const controller = require('../controllers/guildController');

// ##############################################################
// CREATE ROUTER
// ##############################################################
const router = express.Router();

// ##############################################################
// DEFINE ROUTES
// ##############################################################

// Section B endpoints
// Guild creation
router.post('/create/:userId', controller.createGuild);

// Joining guild
router.post('/join/:guildId/:userId', controller.joinGuild);

// Retrieve guilds information
router.get('/', controller.readAllGuilds);
router.get('/:guildid', controller.readGuildById);

// Promoting and demoting of roles 
router.put('/promoteleader/:guildId/:currentLeaderUserId/:newLeaderUserId', controller.promoteUserToLeader);
router.put('/promoteofficer/:guildId/:currentLeaderUserId/:newOfficerUserId', controller.promoteMemberToOfficer);
router.put('/demoteofficer/:guildId/:currentLeaderUserId/:currentOfficerUserId', controller.demoteOfficerToMember);

// Leaving guild
router.delete('/leave/:userId', controller.leaveGuild);
router.delete('/kick/:guildId/:officerUserId/:memberUserId', controller.kickMember);
router.delete('/disband/:guildId/:userId', controller.disbandGuild);

// ##############################################################
// EXPORT ROUTER
// ##############################################################
module.exports = router;