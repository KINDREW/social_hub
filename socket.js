const Chat = require("./models/Chat");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("New client connected");

    // Join a chat room
    socket.on("join", ({ room }) => {
      socket.join(room);
      console.log(`User joined room: ${room}`);
    });

    // Handle sending messages
    socket.on("sendMessage", async (message) => {
      io.to(message.room).emit("message", message); // Broadcast message to the room
      console.log(`Message sent to room ${message.room}: ${message.text}`);

      // Save the message to the database
      const chatMessage = new Chat({
        room: message.room,
        sender: message.sender,
        message: message.text,
      });

      try {
        await chatMessage.save();
      } catch (error) {
        console.error("Error saving message to database:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};
