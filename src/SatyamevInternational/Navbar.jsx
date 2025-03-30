import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md shadow-md p-4 z-20">
        <div className="container mx-auto flex justify-end items-center ">
          <ul className="flex space-x-6 text-black font-bold text-1.5xl ">
            <li><button onClick={() => scrollToSection('home')} className="hover:text-gray-700">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-gray-700">About Us</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-gray-700">Contact Us</button></li>
            <li><button onClick={() => scrollToSection('product')} className="hover:text-gray-700">Product</button></li>
          </ul>
        </div>
      </nav>
      
      <div className="fixed bottom-4 right-4">
        <a href="https://wa.me/8269185071" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-12 h-12" />
        </a>
      </div>
      
      {isVisible && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="fixed bottom-3 left-1 bg-orange-500  p-3 rounded-full  hover:bg-gray-600 ">
          ↑
        </button>
      )}
    </>
  );
}

export default Navbar;
