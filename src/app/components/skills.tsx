'use client'; // Ensures this component is rendered only on the client side

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { title: 'Frontend Web Development', description: 'Building responsive and accessible user interfaces.' },
  { title: 'Backend Development', description: 'Creating robust and scalable server-side applications.' },
  { title: 'Mobile Application Development', description: 'Crafting smooth and efficient mobile experiences.' },
  { title: 'DevOps', description: 'Automating and optimizing development pipelines.' },
  { title: 'System Design', description: 'Most efficient and optimised system design' }
];

const Skills: React.FC = () => {
  const [glossyEffect, setGlossyEffect] = useState(true);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 100) {
      setGlossyEffect(false);
    } else {
      setGlossyEffect(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center py-12 gap-10 z-0">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className={`relative m-4 p-6 w-80 h-56 bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl shadow-lg border border-gray-700 flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:rotate-1`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1,loop: true}}
          whileHover={{ scale: 1.08 }}
        >
          {/* Multi-Layered Background Effect */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-500 to-blue-500 opacity-40 blur-lg"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-70"></div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 p-4">
            <h3 className="text-2xl font-bold text-white mb-3">{skill.title}</h3>
            <p className="text-gray-300">{skill.description}</p>
          </div>

          {/* Floating Icons or Decorative Elements */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <motion.div
              className="w-5 h-5 bg-purple-500 rounded-full shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5 }}
            />
            <motion.div
              className="w-4 h-4 bg-pink-500 rounded-full shadow-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.7 }}
            />
            <motion.div
              className="w-3 h-3 bg-blue-500 rounded-full shadow-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.9 }}
            />
          </div>

          {/* Glowing Edge Animation */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 opacity-50 blur-lg"
            animate={{ opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
