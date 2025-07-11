
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Users as UsersIcon, 
  UserPlus, 
  Search, 
  Filter,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Crown,
  Star
} from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCursor from '../components/AnimatedCursor';

const Users = () => {
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

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

  const users = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@example.com',
      role: 'Premium User',
      avatar: 'SJ',
      status: 'online',
      joinDate: '2024-01-10',
      location: 'New York, USA',
      phone: '+1 (555) 123-4567',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.chen@example.com',
      role: 'Admin',
      avatar: 'MC',
      status: 'online',
      joinDate: '2024-01-08',
      location: 'San Francisco, USA',
      phone: '+1 (555) 987-6543',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'
    },
    // Add more users...
  ];

  const userStats = [
    {
      title: 'Total Users',
      value: '24,680',
      change: '+12.5%',
      icon: UsersIcon,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'New This Month',
      value: '1,245',
      change: '+8.2%',
      icon: UserPlus,
      color: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Premium Users',
      value: '3,890',
      change: '+15.3%',
      icon: Crown,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Active Today',
      value: '12,456',
      change: '+5.1%',
      icon: Star,
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <>
      <AnimatedCursor />
      <PageLayout
        title="User Management"
        subtitle="Manage and monitor all user accounts, roles, and activities"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      >
        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-2xl p-6 bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.title}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Search and Filter */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-all duration-300 ${
                isDark
                  ? 'bg-slate-800/50 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500'
                  : 'bg-white/80 border-slate-200 text-slate-900 placeholder-slate-500 focus:border-blue-500'
              } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center space-x-2 px-4 py-3 rounded-xl border transition-all duration-300 ${
              isDark
                ? 'bg-slate-800/50 border-slate-700 text-slate-300 hover:text-white'
                : 'bg-white/80 border-slate-200 text-slate-600 hover:text-slate-900'
            }`}
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </motion.button>
        </div>

        {/* Users Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: isDark 
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
                  : "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${user.bgColor} border border-slate-200 dark:border-slate-700 group cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${user.color} flex items-center justify-center text-white font-bold shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {user.avatar}
                  </motion.div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${
                      user.status === 'online' ? 'bg-emerald-500' : 'bg-slate-400'
                    }`} />
                    <span className="text-xs text-slate-600 dark:text-slate-400">
                      {user.status}
                    </span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <MoreVertical className="w-4 h-4 text-slate-400" />
                </motion.button>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  {user.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  {user.role}
                </p>
              </div>

              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="truncate">{user.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>{user.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{user.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {user.joinDate}</span>
                </div>
              </div>

              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${user.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </PageLayout>
    </>
  );
};

export default Users;
