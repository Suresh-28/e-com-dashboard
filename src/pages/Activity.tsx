
import React from 'react';
import { motion } from 'framer-motion';
import { Activity as ActivityIcon, User, DollarSign, TrendingUp, Bell, Clock } from 'lucide-react';

const Activity = () => {
  const allActivities = [
    {
      id: 1,
      type: 'user',
      message: 'New user registration',
      time: '2 min ago',
      icon: User,
      color: 'bg-blue-500',
      details: 'John Doe signed up with email john@example.com'
    },
    {
      id: 2,
      type: 'revenue',
      message: 'Payment received: $299',
      time: '5 min ago',
      icon: DollarSign,
      color: 'bg-emerald-500',
      details: 'Payment processed for subscription plan'
    },
    {
      id: 3,
      type: 'analytics',
      message: 'Traffic increased by 12%',
      time: '10 min ago',
      icon: TrendingUp,
      color: 'bg-purple-500',
      details: 'Website traffic spike detected from social media'
    },
    {
      id: 4,
      type: 'notification',
      message: 'System maintenance scheduled',
      time: '1 hour ago',
      icon: Bell,
      color: 'bg-orange-500',
      details: 'Scheduled maintenance window: 2 AM - 4 AM EST'
    },
    {
      id: 5,
      type: 'user',
      message: 'User profile updated',
      time: '2 hours ago',
      icon: User,
      color: 'bg-blue-500',
      details: 'Jane Smith updated profile information'
    },
    {
      id: 6,
      type: 'revenue',
      message: 'Payment received: $149',
      time: '3 hours ago',
      icon: DollarSign,
      color: 'bg-emerald-500',
      details: 'Payment processed for basic plan'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">All Activities</h1>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="space-y-4">
              {allActivities.map((activity, index) => {
                const Icon = activity.icon;
                
                return (
                  <motion.div
                    key={activity.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className={`p-3 rounded-lg ${activity.color} mr-4 flex-shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                          {activity.message}
                        </h3>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                          <Clock className="w-3 h-3 mr-1" />
                          {activity.time}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {activity.details}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Activity;
