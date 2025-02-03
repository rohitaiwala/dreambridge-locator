import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group animate-fade-in">
            <span className="text-xl md:text-2xl font-bold text-primary transition-all duration-300 group-hover:scale-105">
              StudentConnect
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link 
              to="/tutors" 
              className="text-gray-600 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Find Tutors
            </Link>
            <Link 
              to="/tasks" 
              className="text-gray-600 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Tasks
            </Link>
            <Link 
              to="/community" 
              className="text-gray-600 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Community
            </Link>
            <Link 
              to="/resources" 
              className="text-gray-600 hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Resources
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/login">
              <Button 
                variant="outline"
                className="transition-transform duration-300 hover:scale-105"
              >
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button 
                className="transition-transform duration-300 hover:scale-105 animate-fade-in"
              >
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 transition-transform duration-300 hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-accordion-down">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/tutors" 
                className="text-gray-600 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-md transition-all duration-300"
              >
                Find Tutors
              </Link>
              <Link 
                to="/tasks" 
                className="text-gray-600 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-md transition-all duration-300"
              >
                Tasks
              </Link>
              <Link 
                to="/community" 
                className="text-gray-600 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-md transition-all duration-300"
              >
                Community
              </Link>
              <Link 
                to="/resources" 
                className="text-gray-600 hover:text-primary hover:bg-gray-50 px-4 py-2 rounded-md transition-all duration-300"
              >
                Resources
              </Link>
            </div>
            <div className="flex flex-col space-y-2 px-4">
              <Link to="/login">
                <Button 
                  variant="outline" 
                  className="w-full transition-transform duration-300 hover:scale-105"
                >
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  className="w-full transition-transform duration-300 hover:scale-105"
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};