
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Resources from "./pages/Resources";
import ResourceDetailPage from "./pages/ResourceDetail";
import Community from "./pages/Community";
import JoinCommunity from "./pages/JoinCommunity";
import Tutors from "./pages/Tutors";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Tasks from "./pages/Tasks";
import FindTasks from "./pages/FindTasks";
import AddTasks from "./pages/AddTasks";
import TrackTasks from "./pages/TrackTasks";
import ChatRoom from "./pages/ChatRoom";
import TutorOnboarding from "./pages/TutorOnboarding";
import TutorTest from "./pages/TutorTest";
import ClassRequests from "./pages/ClassRequests";
import { AuthProvider } from "./contexts/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:resourceId" element={<ResourceDetailPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Protected Routes - Require Authentication */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/join-community" element={<JoinCommunity />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/find-tasks" element={<FindTasks />} />
            <Route path="/add-tasks" element={<AddTasks />} />
            <Route path="/track-tasks" element={<TrackTasks />} />
            <Route path="/chatroom" element={<ChatRoom />} />
          </Route>
          
          {/* Student-specific Routes */}
          <Route element={<ProtectedRoute requiredRole="student" />}>
            <Route path="/tutors" element={<Tutors />} />
          </Route>
          
          {/* Tutor-specific Routes */}
          <Route element={<ProtectedRoute requiredRole="tutor" />}>
            <Route path="/tutor-onboarding" element={<TutorOnboarding />} />
            <Route path="/tutor-test" element={<TutorTest />} />
            <Route path="/class-requests" element={<ClassRequests />} />
          </Route>
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
