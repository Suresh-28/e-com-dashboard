
import React from 'react';
import { motion } from 'framer-motion';
import { Bell, BellRing, Settings, Check } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'System Update Available',
      message: 'A new system update is ready to install.',
      time: '5 minutes ago',
      read: false,
      type: 'system'
    },
    {
      id: 2,
      title: 'New User Registration',
      message: '3 new users have signed up today.',
      time: '1 hour ago',
      read: false,
      type: 'user'
    },
    {
      id: 3,
      title: 'Payment Processed',
      message: 'Monthly subscription payment received.',
      time: '2 hours ago',
      read: true,
      type: 'payment'
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
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Notifications</h1>
            <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </button>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recent Notifications</h2>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {notifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-6 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                    !notification.read ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-lg mr-4 ${
                      notification.type === 'system' ? 'bg-orange-100 dark:bg-orange-900' :
                      notification.type === 'user' ? 'bg-blue-100 dark:bg-blue-900' :
                      'bg-green-100 dark:bg-green-900'
                    }`}>
                      {!notification.read ? (
                        <BellRing className={`w-5 h-5 ${
                          notification.type === 'system' ? 'text-orange-600' :
                          notification.type === 'user' ? 'text-blue-600' :
                          'text-green-600'
                        }`} />
                      ) : (
                        <Check className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-medium ${
                          !notification.read 
                            ? 'text-gray-900 dark:text-white' 
                            : 'text-gray-600 dark:text-gray-400'
                        }`}>
                          {notification.title}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {notification.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Notifications;
