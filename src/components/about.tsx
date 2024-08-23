"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
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
        duration: 2,
        ease: "easeInOut",
      },
    });
  }, [controls]);

  const calculateLetterColor = (index: number) => {
    const offset = 0;
    const scrollPosition = scrollY - offset;
    const letterTransitionPoint = index * 2;

    if (scrollPosition >= letterTransitionPoint) {
      return `white`;
    } else {
      const greyValue = 50 + (scrollPosition - letterTransitionPoint) * 0;
      return `rgb(${greyValue}, ${greyValue}, ${greyValue})`;
    }
  };

  const renderText = (text: string) =>
    text.split("").map((char, index) => (
      <motion.span
        key={index}
        style={{
          color: calculateLetterColor(index),
          transition: 'color 0.3s ease',
        }}
      >
        {char}
      </motion.span>
    ));

  return (
    <div className="flex flex-col justify-center items-center py-8 gap-4">
  <motion.h1 className="text-4xl font-bold text-center" animate={controls}>
    {renderText("WHY ME ?")}
  </motion.h1>
  <motion.p className="text-lg mt-4 text-center max-w-3xl" animate={controls}>
    {renderText(
      "Since launching my software engineering career at 19, I've been fueled by a deep passion for technology and innovation. I specialize in transforming visionary concepts into cutting-edge solutions, merging creativity with technical expertise to drive meaningful change. My focus is on delivering impactful, forward-thinking results that push the boundaries of what's possible in the digital world."
    )}
  </motion.p>
</div>

  );
};

export default About;
