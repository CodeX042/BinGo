// Header.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../hooks/authFunctions";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const handleRegister = () => {
    login(dispatch);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1
        className="text-lime-400 font-bold text-xl"
        style={{ fontFamily: "cursive" }}
      >
        <img src="/assets/svg/logo_light.svg" alt="logo" />
      </h1>

      {/* Desktop Navigation Links */}
      {/* <nav className="hidden md:flex space-x-8">
        <a href="#about" className="hover:text-lime-400">
          About
        </a>
        <a href="#contact" className="hover:text-lime-400 ">
          Contact Us
        </a>
        <a href="#earn" className="hover:text-lime-400">
          Earn Now
        </a>
      </nav> */}

      {/* Desktop Register Button */}
      <button
        className="hidden md:block border border-lime-400 text-lime-400 px-4 py-2 rounded hover:bg-lime-400 hover:text-black transition-all duration-500 ease-linear"
        onClick={handleRegister}
      >
        Login
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-lime-400">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black text-center p-6 space-y-4">
          {/* <a href="#about" className="block hover:text-lime-400">
            About
          </a>
          <a href="#contact" className="block hover:text-lime-400">
            Contact Us
          </a>
          <a href="#earn" className="block hover:text-lime-400">
            Earn Now
          </a> */}
          <button className="w-full border border-lime-400 text-lime-400 px-4 py-2 rounded hover:bg-lime-400 hover:text-black transition-all duration-75 ease-linear">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
