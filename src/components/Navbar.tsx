"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg border-t-4 border-blue-600 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className=" -my-3">
            <Image
              src="/images/logo.jpeg"
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("quote")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => scrollToSection("track")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Track
            </button>
          </div>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center text-gray-700">
            <FaPhone className="text-blue-600 mr-2" />
            <a
              href="tel:254773946117"
              className="font-semibold hover:text-blue-600 transition-colors"
            >
              +254 773 946 117
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t"
          >
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("quote")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Get Free Quote
              </button>
              <button
                onClick={() => scrollToSection("track")}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors"
              >
                Track
              </button>
              <div className="flex items-center text-gray-700 pt-2">
                <FaPhone className="text-blue-600 mr-2" />
                <a
                  href="tel:254773946117"
                  className="font-semibold hover:text-blue-600 transition-colors"
                >
                  +254 773 946 117
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
