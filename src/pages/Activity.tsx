import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  DollarSign, 
  TrendingUp, 
  Bell, 
  Shield, 
  Zap, 
  Users, 
  Settings,
  Calendar,
  Clock
} from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCursor from '../components/AnimatedCursor';

const Activity = () => {
  const [isDark, setIsDark] = useState(true);
  const [filter, setFilter] = useState('all');

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

  const allActivities = [
    {
      id: 1,
      type: 'user',
      title: 'New User Registration',
      message: 'John Smith created a new account',
      time: '2 minutes ago',
      timestamp: '2024-01-15T10:30:00Z',
      icon: User,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'
    },
    {
      id: 2,
      type: 'revenue',
      title: 'Payment Received',
      message: 'Payment of $299 received from Sarah Johnson',
      time: '5 minutes ago',
      timestamp: '2024-01-15T10:27:00Z',
      icon: DollarSign,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20'
    },
    {
      id: 3,
      type: 'analytics',
      title: 'Traffic Increase',
      message: 'Website traffic increased by 12% today',
      time: '10 minutes ago',
      timestamp: '2024-01-15T10:22:00Z',
      icon: TrendingUp,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20'
    },
    {
      id: 4,
      type: 'notification',
      title: 'System Update',
      message: 'Scheduled system maintenance completed',
      time: '1 hour ago',
      timestamp: '2024-01-15T09:30:00Z',
      icon: Bell,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20'
    },
    {
      id: 5,
      type: 'user',
      title: 'Profile Update',
      message: 'User profile updated by Emily White',
      time: '1.5 hours ago',
      timestamp: '2024-01-15T09:00:00Z',
      icon: User,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'
    },
    {
      id: 6,
      type: 'revenue',
      title: 'Subscription Renewal',
      message: 'Subscription renewed by David Lee',
      time: '2 hours ago',
      timestamp: '2024-01-15T08:30:00Z',
      icon: DollarSign,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20'
    },
    {
      id: 7,
      type: 'analytics',
      title: 'Report Generated',
      message: 'Monthly performance report generated',
      time: '2.5 hours ago',
      timestamp: '2024-01-15T08:00:00Z',
      icon: TrendingUp,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20'
    },
    {
      id: 8,
      type: 'security',
      title: 'Security Alert',
      message: 'Multiple login attempts detected from new location',
      time: '3 hours ago',
      timestamp: '2024-01-15T07:30:00Z',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      bgColor: 'from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20'
    },
    {
      id: 9,
      type: 'performance',
      title: 'Performance Boost',
      message: 'API response time improved by 15%',
      time: '4 hours ago',
      timestamp: '2024-01-15T06:30:00Z',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Activities', icon: Calendar },
    { id: 'user', label: 'User Events', icon: Users },
    { id: 'revenue', label: 'Revenue', icon: DollarSign },
    { id: 'system', label: 'System', icon: Settings },
    { id: 'security', label: 'Security', icon: Shield }
  ];

  const filteredActivities = filter === 'all' 
    ? allActivities 
    : allActivities.filter(activity => activity.type === filter);

  return (
    <>
      <AnimatedCursor />
      <PageLayout
        title="Activity Feed"
        subtitle="Real-time monitoring of all system activities and user interactions"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      >
        {/* Filter Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {filters.map((filterOption, index) => {
              const Icon = filterOption.icon;
              const isActive = filter === filterOption.id;
              
              return (
                <motion.button
                  key={filterOption.id}
                  onClick={() => setFilter(filterOption.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                      : isDark
                      ? 'bg-slate-800/50 hover:bg-slate-700/80 text-slate-300 hover:text-white border border-slate-700'
                      : 'bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{filterOption.label}</span>
                  {isActive && (
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Activity List */}
        <div className="space-y-4">
          {filteredActivities.map((activity, index) => {
            const Icon = activity.icon;
            
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.05, 
                  type: "spring", 
                  stiffness: 100,
                  damping: 20 
                }}
                whileHover={{ 
                  scale: 1.01,
                  x: 4,
                  boxShadow: isDark 
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
                    : "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${activity.bgColor} border border-slate-200 dark:border-slate-700 group cursor-pointer`}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${activity.color} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                          {activity.title}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {activity.message}
                        </p>
                      </div>
                      
                      <motion.div
                        className="flex items-center space-x-1 text-xs text-slate-500 dark:text-slate-400"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Clock className="w-3 h-3" />
                        <span>{activity.time}</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <motion.div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${activity.color}`}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${activity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  initial={false}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Load More Button */}
        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white'
                : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white'
            } shadow-lg shadow-blue-500/25`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Load More Activities
          </motion.button>
        </motion.div>
      </PageLayout>
    </>
  );
};

export default Activity;
