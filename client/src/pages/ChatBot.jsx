import React, { useState } from "react";
import axios from "axios";

const ChatBox = () => {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi there! How can I help?",
      sender: "bot",
      timestamp: "2m ago",
    },
  ]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      text: inputMessage,
      sender: "user",
      timestamp: "Just now",
    };

    // Update the chat history with the user's message
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post(
        "https://deployment-m8tj.onrender.com/chat",
        { text: inputMessage }
      );
      console.log();
      const botMessage = {
        text: response.data.response, // Assuming the API returns a 'response' field
        sender: "bot",
        timestamp: "Just now",
      };

      // Update the chat history with the bot's response
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const botMessage = {
        text: "Sorry, something went wrong. Please try again.",
        sender: "bot",
        timestamp: "Just now",
      };
      setMessages([...messages, userMessage, botMessage]);
    }

    // Clear the input field
    setInputMessage("");
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h2 className="text-lg font-semibold">Chat Assistance</h2>
      </div>
      <div className="p-4 h-64 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg text-white ${
                message.sender === "user"
                  ? "bg-blue-500"
                  : "bg-gray-300 text-gray-800"
              }`}
            >
              <p>{message.text}</p>
              <span className="text-xs block mt-2">{message.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Type a reply..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
      </div>
    </div>
  );
};

export default ChatBox;
