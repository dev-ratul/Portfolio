import React, { useState } from "react";
// import { Link } from "react-router";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full mx-auto text-white fixed  z-50 shadow-md pt-5  md:pt-10">
      <section className="w-4/5 mx-auto rounded-4xl backdrop-blur-3xl ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-2xl cursor-pointer">
              RatulDev
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link
                to={"/"}
                smooth={true}
                duration={800}
                className="hover:text-yellow-300 cursor-pointer transition"
              >
                Home
              </Link>
              <Link
                to={"education"}
                smooth={true}
                duration={800}
                className="hover:text-yellow-300 cursor-pointer transition"
              >
                Education
              </Link>
              <Link
                to={"skills"}
                smooth={true}
                duration={800}
                className="hover:text-blue-600 cursor-pointer transition"
              >
                Skills
              </Link>
              <Link
                to={"projects"}
                smooth={true}
                duration={800}
                className="hover:text-yellow-300 cursor-pointer transition"
              >
                Projects
              </Link>
              <Link
                to={"contact"}
                smooth={true}
                duration={800}
                className="hover:text-yellow-300 cursor-pointer transition"
              >
                Contact
              </Link>

              <Link
                to="about"
                smooth={true}
                duration={800}
                className="hover:text-yellow-300 transition cursor-pointer"
              >
                About
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="focus:outline-none cursor-pointer "
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black  px-4 pt-2 pb-4 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-indigo-900 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-indigo-900 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-indigo-900 transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md hover:bg-yellow-400 hover:text-indigo-900 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
