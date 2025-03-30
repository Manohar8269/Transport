import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/training-center.png";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>                
      <nav className="flex items-center justify-between p-4 shadow-lg fixed w-full z-10">
        
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" className="h-10 w-10" />
        </div>

        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li className="cursor-pointer hover:text-blue-500">
            <Link to="/Home">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <Link to="/aboutus">About</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-500">
            <Link to="/Course">Course</Link>
            </li>

          <li className="cursor-pointer hover:text-blue-500">
            <Link to = "/Service">Service</Link>
            </li>
          <li className="cursor-pointer hover:text-blue-500">
            <Link to = "/Gallery">Gallery</Link></li>

          <li className="cursor-pointer hover:text-blue-500">
          <Link to="/admission">Admission Open</Link></li>
        </ul>

        <Link to = "/Contact">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hidden md:block">
          CONTACT
        </button>
        </Link>
      </nav>


























      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-4 left-5 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 shadow-md"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default Navbar;
