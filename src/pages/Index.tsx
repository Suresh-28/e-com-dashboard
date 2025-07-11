
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, TrendingUp, Activity } from 'lucide-react';
import AnimatedCursor from '../components/AnimatedCursor';
import ThemeToggle from '../components/ThemeToggle';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import DashboardChart from '../components/DashboardChart';
import ActivityFeed from '../components/ActivityFeed';

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const stats = [
    {
      title: 'Total Users',
      value: 12486,
      change: 12.5,
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Revenue',
      value: 248350,
      prefix: '$',
      change: 8.2,
      icon: DollarSign,
      color: 'bg-emerald-500',
    },
    {
      title: 'Growth Rate',
      value: 24.8,
      suffix: '%',
      change: 15.3,
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
    {
      title: 'Active Sessions',
      value: 1847,
      change: -2.1,
      icon: Activity,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      <AnimatedCursor />
      
      <div className="flex">
        <Sidebar isDark={isDark} />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-6 border-b backdrop-blur-sm ${
              isDark 
                ? 'bg-gray-900/50 border-gray-700' 
                : 'bg-white/50 border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Dashboard Overview
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Welcome back! Here's what's happening today.
                </motion.p>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.div
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    isDark
                      ? 'bg-blue-900/30 border-blue-700 text-blue-300'
                      : 'bg-blue-50 border-blue-200 text-blue-700'
                  }`}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Live
                </motion.div>
                <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              </div>
            </div>
          </motion.header>

          {/* Main Content */}
          <main className="flex-1 p-6 overflow-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <StatCard
                    key={stat.title}
                    {...stat}
                    isDark={isDark}
                    delay={index * 0.1}
                  />
                ))}
              </div>

              {/* Charts and Activity Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <DashboardChart isDark={isDark} />
                <ActivityFeed isDark={isDark} />
              </div>

              {/* Footer */}
              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className={`text-center py-8 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                <motion.p
                  className="text-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  Built with ❤️ using React & Framer Motion
                </motion.p>
              </motion.footer>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
