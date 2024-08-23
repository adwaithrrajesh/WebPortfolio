'use client'; // Ensures this component is rendered only on the client side

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);
  };

  return (
    <div className="flex flex-col items-center py-12  bg-gray-900 text-white">
      <motion.div
        className="relative w-full max-w-4xl bg-gray-900 rounded-lg shadow-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Contact Details */}
        <div className="flex flex-col space-y-6 lg:w-1/2 mb-32">
          <h2 className="text-3xl font-bold text-center lg:text-left text-indigo-400">Connect with Me</h2>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-3xl text-teal-400" />
            <p className="text-lg">+1 (234) 567-8901</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-3xl text-teal-400" />
            <p className="text-lg">email@example.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaGithub className="text-3xl text-teal-400" />
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">github.com/username</a>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-3xl text-teal-400" />
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">linkedin.com/in/username</a>
          </div>
          <div className="flex items-center space-x-4">
            <FaTwitter className="text-3xl text-teal-400" />
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">twitter.com/username</a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col space-y-6 lg:w-1/2">
          <h2 className="text-3xl font-bold text-center lg:text-left text-indigo-400">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-lg text-gray-300">Email:</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                placeholder="your-email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg text-gray-300">Subject:</label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                placeholder="Subject of the message"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg text-gray-300">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message here"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg transition duration-300"
            >
              Send
            </button>
          </form>
        </div>

      </motion.div>
    </div>
  );
};

export default Contact;
