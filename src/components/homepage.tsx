"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    });
  }, [controls]);

  const calculateColor = (index: number) => {
    const offset = 1;
    const scrollPosition = scrollY - offset;
    const letterTransitionPoint = index * 1;

    if (scrollPosition >= letterTransitionPoint) {
      // Ensure greyValue stays within a light grey range
      const greyValue = Math.max(150 - (scrollPosition - letterTransitionPoint) * 2, 150);
      return `rgb(${greyValue}, ${greyValue}, ${greyValue})`;
    } else {
      return `rgb(255, 255, 255)`;
    }
  };

  const renderText = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: index * 0.05,
          duration: 0.5,
          ease: "easeOut",
        }}
        style={{
          color: calculateColor(index),
          transition: 'color 0.3s ease',
        }}
      >
        {char}
      </motion.span>
    ));

  const initialAnimation = {
    y: -50,
    opacity: 1,
  };

  const scrollAnimation = {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  };

  // Calculate button colors based on scroll
  const buttonTextColor = scrollY > 0 ? calculateColor(0) : 'black';
  const buttonBorderColor = scrollY > 0 ? calculateColor(0) : 'black';
  const buttonBackgroundColor = calculateColor(0); // Use grey for background based on scroll

  return (
    <div className="min-h-screen flex flex-col justify-center items-center mt-1"> {/* Adjusted margin-bottom */}
      <motion.div
        className="my-8 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden"
        initial={initialAnimation}
        animate={scrollAnimation}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeOut",
        }}
        style={{
          backgroundColor: calculateColor(0), // Apply color based on scroll position
        }}
      >
        <img
          src="https://res.cloudinary.com/dayrfpqyl/image/upload/v1726901781/Untitled/IMG_0207_mnwz8v.jpg"
          alt="Profile"
          className="object-cover w-full h-full"
          style={{
            filter: `brightness(${1 - (scrollY / 1000)})`
          }}
        />
        <br />
      </motion.div>

      <motion.h1 className="text-3xl font-bold" animate={controls}>
        {renderText("Hi, I'm Adwaith – Shaping the Future with Software")}
      </motion.h1>

      <motion.p className="text-lg mt-4" animate={controls}>
        {renderText(
          "Turning visionary ideas into tangible realities, one line of code at a time."
        )}
      </motion.p>

      <motion.button className="mt-8 px-6 py-3 font-semibold rounded-full flex items-center justify-center border transition duration-300 ease-in-out"
        initial={initialAnimation}
        animate={scrollAnimation}
        whileHover={{
          scale: 1.5,
          boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
        }}
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        style={{
          backgroundColor: buttonBackgroundColor, // Apply color based on scroll position
          color: 'black', // Button text color
          borderColor: buttonBorderColor, // Button border color
        }}
      >
        <FaPhoneAlt className="mr-2" />
        Contact Me
      </motion.button>
    </div>
  );
};

export default HomePage;
