import { Server } from "socket.io";
import ChatMessage from "../models/ChatMessage.js";

let io;

export const initializeSocket = (server) => {
  io = new Server(server);

  io.on("connection", (socket) => {
    console.log("New client connected");

    socket.on("joinConsultation", (consultationId) => {
      socket.join(consultationId);
    });

    socket.on("leaveConsultation", (consultationId) => {
      socket.leave(consultationId);
    });

    socket.on("chatMessage", async ({ consultationId, userId, message }) => {
      try {
        const newMessage = await ChatMessage.create({
          consultation: consultationId,
          sender: userId,
          message,
        });
        io.to(consultationId).emit("newMessage", newMessage);
      } catch (error) {
        console.error("Error saving chat message:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  });
};

export const getIo = () => {
  if (!io) {
    throw new Error("Socket.io not initialized!");
  }
  return io;
};
