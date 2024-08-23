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
      y: [0, -10, 0],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  const calculateLetterColor = (index: number) => {
    const offset = 10;
    const scrollPosition = scrollY - offset;
    const letterTransitionPoint = index * 2;

    if (scrollPosition >= letterTransitionPoint) {
      const greyValue = 200 - (scrollPosition - letterTransitionPoint) * 2;
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
          color: calculateLetterColor(index),
          transition: "color 0.3s ease",
        }}
      >
        {char}
      </motion.span>
    ));

  const initialAnimation = {
    y: -50,
    opacity: 0,
  };

  const scrollAnimation = {
    y: 0,
    opacity: scrollY > 50 ? 0 : 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center mb-0"> {/* Adjusted margin-bottom */}
    <motion.div
      className="my-8 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden"
      initial={initialAnimation}
      animate={scrollAnimation}
      transition={{
        delay: 0.3,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <img
        src="https://cdn.britannica.com/47/188747-050-1D34E743/Bill-Gates-2011.jpg"
        alt="Profile"
        className="object-cover w-full h-full"
      />
      <br />
    </motion.div>
  
    <motion.h1 className="text-3xl font-bold text-[#E0B0FF]" animate={controls}>
      {renderText("Hi, I'm Adwaith – Shaping the Future with Software")}
    </motion.h1>
  
    <motion.p className="text-lg mt-4 text-[#E0B0FF]" animate={controls}>
      {renderText(
        "Turning visionary ideas into tangible realities, one line of code at a time."
      )}
    </motion.p>
  
    <motion.button className="mt-8 px-6 py-3 bg-darkblue-500 text-white font-semibold rounded-full flex items-center justify-center shadow-lg border border-white transition duration-300 ease-in-out"
      initial={initialAnimation}
      animate={scrollAnimation}
      whileHover={{
        scale: 1.5,
        boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
      }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
    >
      <FaPhoneAlt className="mr-2" />
      Contact Me
    </motion.button>
  </div>
  
  );
};

export default HomePage;
