
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  PieChart, 
  Activity, 
  DollarSign, 
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Target
} from 'lucide-react';
import PageLayout from '../components/PageLayout';
import AnimatedCursor from '../components/AnimatedCursor';

const Analytics = () => {
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

  const analyticsCards = [
    {
      title: 'Revenue Analytics',
      description: 'Track your revenue trends and performance metrics with advanced insights.',
      icon: DollarSign,
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20',
      value: '$284,320',
      change: '+12.5%',
      trend: 'up'
    },
    {
      title: 'User Growth',
      description: 'Monitor user acquisition, retention, and engagement patterns.',
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20',
      value: '24,680',
      change: '+8.2%',
      trend: 'up'
    },
    {
      title: 'Performance Metrics',
      description: 'Get detailed insights from your data analysis and KPIs.',
      icon: Target,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20',
      value: '94.2%',
      change: '+3.1%',
      trend: 'up'
    },
    {
      title: 'Conversion Rate',
      description: 'Track conversion funnels and optimize your business metrics.',
      icon: Zap,
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20',
      value: '3.4%',
      change: '-0.8%',
      trend: 'down'
    },
  ];

  const chartCards = [
    {
      title: 'Revenue Analytics',
      icon: BarChart3,
      color: 'from-emerald-500 to-green-600',
      description: 'Advanced revenue tracking and forecasting'
    },
    {
      title: 'Growth Metrics',
      icon: TrendingUp,
      color: 'from-blue-500 to-indigo-600',
      description: 'User acquisition and retention analytics'
    },
    {
      title: 'Data Insights',
      icon: PieChart,
      color: 'from-purple-500 to-violet-600',
      description: 'Comprehensive data visualization and reports'
    },
    {
      title: 'Real-time Activity',
      icon: Activity,
      color: 'from-orange-500 to-red-600',
      description: 'Live performance monitoring and alerts'
    },
  ];

  return (
    <>
      <AnimatedCursor />
      <PageLayout
        title="Analytics Dashboard"
        subtitle="Comprehensive insights and data visualization for your business metrics"
        isDark={isDark}
        onToggleTheme={toggleTheme}
      >
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {analyticsCards.map((card, index) => {
            const Icon = card.icon;
            const TrendIcon = card.trend === 'up' ? ArrowUpRight : ArrowDownRight;
            
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: isDark 
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                    : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${card.bgColor} border border-slate-200 dark:border-slate-700 group cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-r ${card.color} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                      card.trend === 'up'
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <TrendIcon className="w-3 h-3" />
                    <span>{card.change}</span>
                  </motion.div>
                </div>
                
                <div className="mb-3">
                  <motion.h3
                    className="text-2xl font-bold text-slate-900 dark:text-white mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {card.value}
                  </motion.h3>
                  <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {card.description}
                  </p>
                </div>

                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  initial={false}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Chart Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {chartCards.map((chart, index) => {
            const Icon = chart.icon;
            
            return (
              <motion.div
                key={chart.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: isDark 
                    ? "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                className="relative overflow-hidden rounded-2xl p-8 bg-white/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 backdrop-blur-sm group cursor-pointer"
              >
                <div className="flex items-center mb-6">
                  <motion.div
                    className={`p-4 rounded-2xl bg-gradient-to-r ${chart.color} shadow-xl mr-4`}
                    whileHover={{ scale: 1.1, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {chart.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {chart.description}
                    </p>
                  </div>
                </div>
                
                {/* Placeholder chart area */}
                <div className="h-48 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl flex items-center justify-center">
                  <motion.div
                    className="text-slate-400 dark:text-slate-600"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className="w-12 h-12" />
                  </motion.div>
                </div>

                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${chart.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />
              </motion.div>
            );
          })}
        </div>
      </PageLayout>
    </>
  );
};

export default Analytics;
