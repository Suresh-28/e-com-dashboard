
import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <motion.button
      onClick={onToggle}
      className={`relative w-12 h-6 rounded-full flex items-center transition-colors duration-300 ${
        isDark ? 'bg-gray-700' : 'bg-gray-300'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className={`w-5 h-5 rounded-full flex items-center justify-center shadow-md ${
          isDark ? 'bg-blue-500' : 'bg-yellow-400'
        }`}
        animate={{
          x: isDark ? 4 : 22,
          rotate: isDark ? 0 : 180,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <motion.div
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="w-3 h-3 text-white" />
          ) : (
            <Sun className="w-3 h-3 text-gray-800" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
