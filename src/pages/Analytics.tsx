
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  Calendar,
  Filter
} from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCursor from '../components/AnimatedCursor';

const Analytics = () => {
  const [isDark, setIsDark] = useState(true);
  const [timePeriod, setTimePeriod] = useState('month');

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

  const getAnalyticsData = (period: string) => {
    const data = {
      week: {
        revenue: '$12,450',
        growth: '+8.2%',
        users: '2,340',
        userGrowth: '+12%',
        sessions: '8,920',
        sessionGrowth: '+5.8%',
        conversion: '3.4%',
        conversionGrowth: '+0.2%'
      },
      month: {
        revenue: '$48,250',
        growth: '+15.3%',
        users: '12,450',
        userGrowth: '+18%',
        sessions: '35,680',
        sessionGrowth: '+12.4%',
        conversion: '4.2%',
        conversionGrowth: '+0.8%'
      },
      year: {
        revenue: '$580,000',
        growth: '+24.7%',
        users: '156,780',
        userGrowth: '+35%',
        sessions: '425,680',
        sessionGrowth: '+28.9%',
        conversion: '5.8%',
        conversionGrowth: '+1.4%'
      }
    };
    return data[period] || data.month;
  };

  const currentData = getAnalyticsData(timePeriod);

  const analyticsCards = [
    {
      title: 'Total Revenue',
      value: currentData.revenue,
      change: currentData.growth,
      icon: DollarSign,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20'
    },
    {
      title: 'Active Users',
      value: currentData.users,
      change: currentData.userGrowth,
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20'
    },
    {
      title: 'Sessions',
      value: currentData.sessions,
      change: currentData.sessionGrowth,
      icon: BarChart3,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20'
    },
    {
      title: 'Conversion Rate',
      value: currentData.conversion,
      change: currentData.conversionGrowth,
      icon: TrendingUp,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20'
    }
  ];

  const timePeriods = [
    { id: 'week', label: 'Week' },
    { id: 'month', label: 'Month' },
    { id: 'year', label: 'Year' }
  ];

  return (
    <>
      <AnimatedCursor />
      <PageLayout
        title="Analytics Dashboard"
        subtitle="Comprehensive insights into your business performance"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      >
        {/* Time Period Filter */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <Calendar className="w-5 h-5 text-slate-600 dark:text-slate-400" />
            <div className="flex space-x-2">
              {timePeriods.map((period) => (
                <motion.button
                  key={period.id}
                  onClick={() => setTimePeriod(period.id)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                    timePeriod === period.id
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                      : isDark
                      ? 'bg-slate-800/50 hover:bg-slate-700/80 text-slate-300 hover:text-white'
                      : 'bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900'
                  } border border-slate-200 dark:border-slate-700`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {period.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsCards.map((card, index) => {
            const Icon = card.icon;
            
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.02 }}
                className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${card.bgColor} border border-slate-200 dark:border-slate-700`}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${card.color} shadow-lg flex items-center justify-center`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                    {card.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {card.value}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {card.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </PageLayout>
    </>
  );
};

export default Analytics;
