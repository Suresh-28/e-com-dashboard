
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bell, BellRing, Settings, Check } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCursor from '../components/AnimatedCursor';

const Notifications = () => {
  const [isDark, setIsDark] = useState(true);
  const [notifications, setNotifications] = useState([
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
  ]);

  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('notificationSettings');
    return saved ? JSON.parse(saved) : {
      email: true,
      push: true,
      sms: false,
      desktop: true
    };
  });

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

  useEffect(() => {
    localStorage.setItem('notificationSettings', JSON.stringify(settings));
  }, [settings]);

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

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const toggleSetting = (key: string) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <AnimatedCursor />
      <PageLayout
        title="Notifications"
        subtitle="Manage your notifications and preferences"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Notifications List */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Recent Notifications</h2>
              </div>
              
              <div className="divide-y divide-slate-200 dark:divide-slate-700">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className={`p-6 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors cursor-pointer ${
                      !notification.read ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''
                    }`}
                    onClick={() => markAsRead(notification.id)}
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
                          <Check className="w-5 h-5 text-slate-500" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`font-medium ${
                            !notification.read 
                              ? 'text-slate-900 dark:text-white' 
                              : 'text-slate-600 dark:text-slate-400'
                          }`}>
                            {notification.title}
                          </h3>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Settings Panel */}
          <div className="bg-white/80 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Notification Settings</h3>
            
            <div className="space-y-4">
              {Object.entries(settings).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300 capitalize">
                    {key} Notifications
                  </label>
                  <button
                    onClick={() => toggleSetting(key)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600' 
                        : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        value ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Notifications;
