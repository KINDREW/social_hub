const express = require("express");
const router = express.Router();
const chatController = require("../controllers/chatController");

// Get messages for a room
router.get("/:room", chatController.getMessagesForRoom);

module.exports = router;
