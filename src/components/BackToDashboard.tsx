
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackToDashboardProps {
  isDark?: boolean;
}

const BackToDashboard = ({ isDark = true }: BackToDashboardProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <motion.button
      onClick={handleBack}
      className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 group ${
        isDark
          ? 'bg-slate-800/50 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700'
          : 'bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
      }`}
      whileHover={{ scale: 1.02, x: -2 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className="flex items-center justify-center"
        whileHover={{ x: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <ArrowLeft className="w-4 h-4" />
      </motion.div>
      <span className="text-sm font-medium">Back to Dashboard</span>
      <motion.div
        className={`w-2 h-2 rounded-full ${
          isDark ? 'bg-blue-400' : 'bg-blue-600'
        }`}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.button>
  );
};

export default BackToDashboard;
