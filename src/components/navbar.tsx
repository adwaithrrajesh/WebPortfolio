"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "skills" },
    {id:4, link:"experience"},
    { id: 5, link: "contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="flex justify-between items-center w-full h-20 px-4">
        <ul className="hidden md:flex mx-auto">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-10 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200"
            >
              <ScrollLink
                to={link}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80} // Adjust based on your navbar height
                activeClass="text-white font-bold" // Highlight active section
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 text-gray-500 md:hidden ml-auto"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <ScrollLink
                onClick={() => setNav(!nav)}
                to={link}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80} // Adjust based on your navbar height
                activeClass="text-white font-bold" // Highlight active section
              >
                {link}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
