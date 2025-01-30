import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">StudentConnect</span>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/tutors" className="text-gray-600 hover:text-primary">Find Tutors</Link>
            <Link to="/tasks" className="text-gray-600 hover:text-primary">Tasks</Link>
            <Link to="/community" className="text-gray-600 hover:text-primary">Community</Link>
            <Link to="/resources" className="text-gray-600 hover:text-primary">Resources</Link>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};