
import { Link } from "react-router-dom";
import { Github, Twitter, Facebook, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return <footer className="relative w-full mt-auto">
      {/* AI-inspired decorative element */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C] to-[#403E43] opacity-95" />
      
      {/* Neural network pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.2)_1px,transparent_1px)] bg-[length:20px_20px]" />

      <div className="relative container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-300">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#1EAEDB]">
              StudentConnect
            </h3>
            <p className="text-sm opacity-75">
              Empowering education through AI-driven connections and personalized learning experiences.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/tutors" className="text-sm hover:text-[#9b87f5] transition-colors duration-200">
                  Find Tutors
                </Link>
              </li>
              <li>
                <Link to="/tasks" className="text-sm hover:text-[#9b87f5] transition-colors duration-200">
                  Tasks
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-sm hover:text-[#9b87f5] transition-colors duration-200">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-sm hover:text-[#9b87f5] transition-colors duration-200">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm hover:text-[#9b87f5] transition-colors duration-200">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:text-[#9b87f5] transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:text-[#9b87f5] transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-sm hover:text-[#9b87f5] transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-white">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#9b87f5] transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#9b87f5] transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#9b87f5] transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#9b87f5] transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
              <a href="mailto:contact@studentconnect.com" className="text-gray-300 hover:text-[#9b87f5] transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-lg">© 2025 StudentConnect. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>;
};
