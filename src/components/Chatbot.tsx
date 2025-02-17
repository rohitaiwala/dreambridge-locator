import { useState } from "react";
import axios from "axios";
import "./Chatbot.css"; // Import chatbot styles

const Chatbot = () => {
  const [messages, setMessages] = useState<{ text: string; sender: string }[]>(
    []
  );
  const [input, setInput] = useState("");

  const API_KEY = "YOUR_GEMINI_API_KEY"; // Replace with your actual Gemini API Key
  const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post(API_URL, {
        contents: [{ parts: [{ text: input }] }],
      });

      const botMessage =
        response.data.candidates[0]?.content?.parts[0]?.text ||
        "I didn't understand.";
      setMessages([...newMessages, { text: botMessage, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { text: "Error fetching response.", sender: "bot" }]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        AI Chatbot
        <button className="close-btn" onClick={() => setMessages([])}>
          ✖
        </button>
      </div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
