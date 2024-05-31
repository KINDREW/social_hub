const Chat = require("../models/Chat");

// Get messages for a room
exports.getMessagesForRoom = async (req, res) => {
  try {
    const room = req.params.room;
    const messages = await Chat.find({ room }).sort("timestamp");
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
