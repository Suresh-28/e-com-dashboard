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
    
    // Apply theme to document
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
    <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <AnimatedCursor />
      
      <div className="flex">
        <Sidebar isDark={isDark} />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 border-b backdrop-blur-sm bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl font-bold text-slate-900 dark:text-white"
                >
                  Dashboard Overview
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-sm text-slate-600 dark:text-slate-400"
                >
                  Welcome back! Here's what's happening today.
                </motion.p>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.div
                  className="px-3 py-1 rounded-full text-xs font-medium border bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-950/50 dark:to-blue-950/50 border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300"
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
                className="text-center py-8 text-slate-600 dark:text-slate-400"
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
