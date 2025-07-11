
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  suffix?: string;
  prefix?: string;
  change?: number;
  icon: LucideIcon;
  color: string;
  isDark: boolean;
  delay?: number;
}

const StatCard = ({ 
  title, 
  value, 
  suffix = '', 
  prefix = '',
  change, 
  icon: Icon, 
  color, 
  isDark,
  delay = 0 
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 20 
      }}
      whileHover={{ 
        y: -4,
        scale: 1.02,
        boxShadow: isDark 
          ? "0 20px 40px rgba(0, 0, 0, 0.3)" 
          : "0 20px 40px rgba(0, 0, 0, 0.1)"
      }}
      className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
        isDark 
          ? 'bg-gray-800/50 border-gray-700 hover:border-gray-600' 
          : 'bg-white/80 border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className={`text-sm font-medium ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {title}
          </p>
          
          <div className="flex items-baseline mt-2">
            <motion.span
              className={`text-3xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 0.2, type: "spring" }}
            >
              {prefix}
              <CountUp
                end={value}
                duration={2}
                delay={delay}
                separator=","
                preserveValue
              />
              {suffix}
            </motion.span>
            
            {change !== undefined && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.4 }}
                className={`ml-2 text-sm font-medium flex items-center ${
                  change >= 0 
                    ? 'text-emerald-500' 
                    : 'text-red-500'
                }`}
              >
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {change >= 0 ? '↗' : '↘'}
                </motion.span>
                {Math.abs(change)}%
              </motion.span>
            )}
          </div>
        </div>
        
        <motion.div
          className={`p-3 rounded-xl ${color}`}
          whileHover={{ 
            rotate: 12,
            scale: 1.1 
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatCard;
