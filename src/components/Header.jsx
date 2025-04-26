import React, { useState, useEffect } from 'react';
import { FaRobot } from 'react-icons/fa';
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { motion } from 'framer-motion';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md transition-colors duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-4 flex md:flex-row justify-between items-center">
        
        {/* Left side - Title + Icon */}
        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FaRobot className="text-gray-800 dark:text-gray-400 text-3xl" />
          <h1 className="text-2xl md:text-3xl font-bold text-blue-800 dark:text-blue-400 raleway-title">
            HumanChain AI
          </h1>
        </motion.div>

        {/* Right side - Dark Mode Toggle and Live Monitoring (only on desktop) */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          {/* Live Monitoring (only desktop) */}
          <motion.div 
            className="hidden md:flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm md:text-base font-semibold text-red-600 dark:text-red-400">
              Live Monitoring
            </span>
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-500"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            ></motion.div>
          </motion.div>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {darkMode ? <MdOutlineLightMode className="text-yellow-400 text-xl" /> : <MdOutlineDarkMode className="text-blue-700 text-xl" />}
          </motion.button>
        </div>

      </div>
    </header>
  );
};

export default Header;