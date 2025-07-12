
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, BarChart, LineChart } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCursor from '../components/AnimatedCursor';

const Trends = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <AnimatedCursor />
      <PageLayout
        title="Trends Analysis" 
        subtitle="Monitor key performance indicators and market trends"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">User Growth</h3>
              <TrendingUp className="w-6 h-6 text-green-500" />
            </div>
            <div className="text-3xl font-bold text-green-500 mb-2">+24%</div>
            <p className="text-slate-600 dark:text-slate-400">Compared to last month</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Revenue Trend</h3>
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
            <div className="text-3xl font-bold text-blue-500 mb-2">+18%</div>
            <p className="text-slate-600 dark:text-slate-400">Monthly recurring revenue</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Churn Rate</h3>
              <TrendingDown className="w-6 h-6 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-red-500 mb-2">-5%</div>
            <p className="text-slate-600 dark:text-slate-400">Customer retention improved</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/80 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Engagement</h3>
              <LineChart className="w-6 h-6 text-purple-500" />
            </div>
            <div className="text-3xl font-bold text-purple-500 mb-2">+32%</div>
            <p className="text-slate-600 dark:text-slate-400">Daily active users</p>
          </motion.div>
        </div>
      </PageLayout>
    </>
  );
};

export default Trends;
