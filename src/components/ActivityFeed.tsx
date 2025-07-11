
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { User, DollarSign, TrendingUp, Bell } from 'lucide-react';

interface ActivityFeedProps {
  isDark: boolean;
}

const ActivityFeed = ({ isDark }: ActivityFeedProps) => {
  const navigate = useNavigate();

  const activities = [
    {
      id: 1,
      type: 'user',
      message: 'New user registration',
      time: '2 min ago',
      icon: User,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      type: 'revenue',
      message: 'Payment received: $299',
      time: '5 min ago',
      icon: DollarSign,
      color: 'bg-emerald-500',
    },
    {
      id: 3,
      type: 'analytics',
      message: 'Traffic increased by 12%',
      time: '10 min ago',
      icon: TrendingUp,
      color: 'bg-purple-500',
    },
    {
      id: 4,
      type: 'notification',
      message: 'System maintenance scheduled',
      time: '1 hour ago',
      icon: Bell,
      color: 'bg-orange-500',
    },
  ];

  const handleViewAll = () => {
    navigate('/activity');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, type: "spring" }}
      className={`p-6 rounded-2xl border ${
        isDark 
          ? 'bg-gray-800/50 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-lg font-semibold ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Recent Activity
        </h3>
        <motion.button
          onClick={handleViewAll}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`text-sm ${
            isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
          }`}
        >
          View All
        </motion.button>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          
          return (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, type: "spring" }}
              whileHover={{ x: 4, scale: 1.02 }}
              className={`flex items-center p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                isDark 
                  ? 'hover:bg-gray-700/50' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <motion.div
                className={`p-2 rounded-lg ${activity.color} flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="w-4 h-4 text-white" />
              </motion.div>
              
              <div className="ml-4 flex-1">
                <p className={`text-sm font-medium ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {activity.message}
                </p>
                <p className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {activity.time}
                </p>
              </div>
              
              <motion.div
                className={`w-2 h-2 rounded-full ${activity.color}`}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ActivityFeed;
