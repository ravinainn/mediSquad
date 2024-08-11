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

    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const response = await axios.post(
        "https://deployment-m8tj.onrender.com/chat",
        { text: inputMessage }
      );
      const botMessage = {
        text: response.data.response,
        sender: "bot",
        timestamp: "Just now",
      };
      setInputMessage("");
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      const botMessage = {
        text: "Sorry, something went wrong. Please try again.",
        sender: "bot",
        timestamp: "Just now",
      };
      setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);
    }

    setInputMessage("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg flex flex-col h-screen">
      <div className="bg-teal-600 text-white p-6 rounded-t-lg flex justify-between items-center">
        <h2 className="text-xl font-bold">Chat Assistance</h2>
        <span className="text-sm opacity-75">Online</span>
      </div>
      <div className="flex-1 overflow-y-auto p-8 bg-white space-y-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-3xl p-6 rounded-xl shadow-lg ${
                message.sender === "user"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-800 border border-gray-300"
              }`}
            >
              <p className="text-lg">{message.text}</p>
              <span className="text-xs block mt-2 text-gray-400">
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 border-t bg-gray-50 flex items-center space-x-4">
        <input
          type="text"
          className="flex-grow p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-600 text-lg"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="px-6 py-3 bg-teal-600 text-white text-lg font-semibold rounded-xl hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
