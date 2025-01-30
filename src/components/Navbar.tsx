import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl md:text-2xl font-bold text-primary">StudentConnect</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/tutors" className="text-gray-600 hover:text-primary">Find Tutors</Link>
            <Link to="/tasks" className="text-gray-600 hover:text-primary">Tasks</Link>
            <Link to="/community" className="text-gray-600 hover:text-primary">Community</Link>
            <Link to="/resources" className="text-gray-600 hover:text-primary">Resources</Link>
          </div>
          
          <div className="hidden md:flex space-x-4">
            <Button variant="outline">Login</Button>
            <Button>Register</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <Link to="/tutors" className="text-gray-600 hover:text-primary px-4 py-2">Find Tutors</Link>
              <Link to="/tasks" className="text-gray-600 hover:text-primary px-4 py-2">Tasks</Link>
              <Link to="/community" className="text-gray-600 hover:text-primary px-4 py-2">Community</Link>
              <Link to="/resources" className="text-gray-600 hover:text-primary px-4 py-2">Resources</Link>
            </div>
            <div className="flex flex-col space-y-2 px-4">
              <Button variant="outline" className="w-full">Login</Button>
              <Button className="w-full">Register</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};