import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between lg:px-[4em] items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">Home</Link>
        </div>
        <div className="space-x-4">
          <Link to="/businesses" className="text-white">
            Businesses
          </Link>
          <Link to="/login" className="text-white">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
