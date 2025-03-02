
import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-[#1EAEDB]">
          Education Portal
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-[#1EAEDB]">
            Home
          </Link>
          <Link to="/resources" className="text-gray-700 dark:text-gray-300 hover:text-[#1EAEDB]">
            Resources
          </Link>
          <Link to="/community" className="text-gray-700 dark:text-gray-300 hover:text-[#1EAEDB]">
            Community
          </Link>
        </div>
      </div>
    </nav>
  );
};
