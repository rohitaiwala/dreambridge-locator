
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, Home, Moon, Sun, User, BookOpen, ClipboardList } from "lucide-react";
import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { useAuth } from "@/contexts/AuthContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  const { user, logout } = useAuth();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 animate-fade-in transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group animate-fade-in">
            <span className="text-xl md:text-2xl font-bold text-primary dark:text-white transition-all duration-300 group-hover:scale-105">
              StudentConnect
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 px-[44px]">
              {user?.role === 'tutor' ? (
                <Link to="/class-requests" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>Class Requests</span>
                </Link>
              ) : (
                <Link to="/tutors" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  Find Tutors
                </Link>
              )}
              <Link to="/tasks" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left flex items-center gap-1">
                <ClipboardList className="h-4 w-4" />
                <span>Tasks</span>
              </Link>
              <Link to="/community" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Community
              </Link>
              <Link to="/resources" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Resources
              </Link>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} className="data-[state=checked]:bg-primary" />
              <span className="sr-only">Toggle theme</span>
              {isDarkMode ? <Moon className="h-4 w-4 text-gray-300" /> : <Sun className="h-4 w-4 text-gray-600" />}
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link to="/profile">
                    <Button variant="outline" className="transition-transform duration-300 hover:scale-105 dark:text-white dark:border-gray-600 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      My Profile
                    </Button>
                  </Link>
                  <Button 
                    onClick={() => logout()} 
                    className="transition-transform duration-300 hover:scale-105 animate-fade-in"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" className="transition-transform duration-300 hover:scale-105 dark:text-white dark:border-gray-600">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="transition-transform duration-300 hover:scale-105 animate-fade-in">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 transition-transform duration-300 hover:scale-110 text-gray-600 dark:text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden py-4 animate-accordion-down dark:bg-gray-900">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
                <div className="flex items-center gap-2 px-0 mx-[95px]">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </div>
              </Link>
              {user?.role === 'tutor' ? (
                <Link to="/class-requests" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 justify-center">
                  <BookOpen className="h-4 w-4" />
                  <span>Class Requests</span>
                </Link>
              ) : (
                <Link to="/tutors" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md transition-all duration-300">
                  Find Tutors
                </Link>
              )}
              <Link to="/tasks" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md transition-all duration-300 flex items-center gap-2 justify-center">
                <ClipboardList className="h-4 w-4" />
                <span>Tasks</span>
              </Link>
              <Link to="/community" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md transition-all duration-300">
                Community
              </Link>
              <Link to="/resources" className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-4 py-2 rounded-md transition-all duration-300">
                Resources
              </Link>

              {/* Mobile Theme Toggle */}
              <div className="flex items-center justify-between py-2 px-0 mx-[79px]">
                <span className="text-gray-600 dark:text-gray-300">Dark Mode</span>
                <div className="flex items-center space-x-2">
                  <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} className="data-[state=checked]:bg-primary" />
                  {isDarkMode ? <Moon className="h-4 w-4 text-gray-300" /> : <Sun className="h-4 w-4 text-gray-600" />}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 px-4">
              {user ? (
                <>
                  <Link to="/profile">
                    <Button variant="outline" className="w-full transition-transform duration-300 hover:scale-105 dark:text-white dark:border-gray-600 flex items-center justify-center gap-2">
                      <User className="h-4 w-4" />
                      My Profile
                    </Button>
                  </Link>
                  <Button 
                    onClick={() => logout()} 
                    className="w-full transition-transform duration-300 hover:scale-105"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" className="w-full transition-transform duration-300 hover:scale-105 dark:text-white dark:border-gray-600">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="w-full transition-transform duration-300 hover:scale-105">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>}
      </div>
    </nav>;
};
