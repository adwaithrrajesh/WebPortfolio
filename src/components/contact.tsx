'use client'; 

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status,setStatus] = useState('')

  const [errors, setErrors] = useState<{ email?: string; subject?: string; message?: string }>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const newErrors: { email?: string; subject?: string; message?: string } = {};
  
    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
  
    if (subject.trim() === '') {
      newErrors.subject = 'Subject is required.';
    }
  
    if (message.trim() === '') {
      newErrors.message = 'Message is required.';
    }
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
  
      try {
        setStatus('processing...')
        const res = await fetch('/api/sendMail', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email,
              subject,
              message,
          }),
      });

      const data = await res.json();

      if (data.success) {
          setStatus('Email sent successfully!');
          setEmail('');
          setSubject('');
          setMessage('');
      } else {
          setStatus('Failed to send email. Please try again.');
      }
      } catch (error) {
        alert(`Failed to send email: ${error}`);
      }
    }
  };
  ;
  

  return (
    <div className="flex flex-col items-center py-12 bg-gray-900 text-white">
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
            <p className="text-lg">+91 7994734828</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-3xl text-teal-400" />
            <p className="text-lg">adwaithrrajesh.k@gmail.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <FaGithub className="text-3xl text-teal-400" />
            <a href="https://github.com/adwaithrrajesh" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">github.com/adwaithrrajesh</a>
          </div>
          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-3xl text-teal-400" />
            <a href="https://www.linkedin.com/in/adwaith-r-rajesh-333545243/" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">linkedin.com/in/adwaithrrajesh</a>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full p-3 bg-gray-700 border rounded-lg text-white focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="your-email@example.com"
                required
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg text-gray-300">Subject:</label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`w-full p-3 bg-gray-700 border rounded-lg text-white focus:ring-2 focus:ring-indigo-500 ${errors.subject ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Subject of the message"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-lg text-gray-300">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`w-full p-3 bg-gray-700 border rounded-lg text-white focus:ring-2 focus:ring-indigo-500 ${errors.message ? 'border-red-500' : 'border-gray-600'}`}
                placeholder="Write your message here"
                rows={4}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            {
              status ?
              <button
              disabled
              className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition duration-300"
            >
              {status}
            </button>
            :
            <button
            type="submit"
            className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg transition duration-300">
            Send
          </button>
            }
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
