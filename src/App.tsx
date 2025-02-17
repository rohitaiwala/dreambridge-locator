import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import Tutors from "@/pages/Tutors";
import Tasks from "@/pages/Tasks";
import Community from "@/pages/Community";
import Resources from "@/pages/Resources";
import SignUp from "@/pages/SignUp";
import Login from "@/pages/Login";
import Chatbot from "@/components/Chatbot"; // Import Chatbot
import "./App.css";

function App() {
  const [showChat, setShowChat] = useState(false);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Chatbot Icon */}
        <div className="chat-icon" onClick={() => setShowChat(!showChat)}>
          🗨️ {/* Replace with a chatbot icon image */}
        </div>

        {/* Chatbot Window */}
        {showChat && <Chatbot />}
      </div>
    </Router>
  );
}

export default App;
