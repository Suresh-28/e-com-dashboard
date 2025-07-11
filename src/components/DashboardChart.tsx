
import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DashboardChartProps {
  isDark: boolean;
}

const DashboardChart = ({ isDark }: DashboardChartProps) => {
  const data = [
    { name: 'Jan', users: 1200, revenue: 2400 },
    { name: 'Feb', users: 1900, revenue: 3200 },
    { name: 'Mar', users: 2100, revenue: 2800 },
    { name: 'Apr', users: 2800, revenue: 3900 },
    { name: 'May', users: 3200, revenue: 4200 },
    { name: 'Jun', users: 3800, revenue: 4800 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className={`p-6 rounded-2xl border ${
        isDark 
          ? 'bg-gray-800/50 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className={`text-lg font-semibold ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Growth Analytics
          </h3>
          <p className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Monthly performance overview
          </p>
        </div>
        
        <div className="flex space-x-1">
          {['Week', 'Month', 'Year'].map((period, index) => (
            <motion.button
              key={period}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1 text-xs rounded-lg transition-colors ${
                index === 1
                  ? 'bg-blue-500 text-white'
                  : isDark
                  ? 'text-gray-400 hover:bg-gray-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {period}
            </motion.button>
          ))}
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={isDark ? '#374151' : '#E5E7EB'} 
            />
            <XAxis 
              dataKey="name" 
              stroke={isDark ? '#9CA3AF' : '#6B7280'}
              fontSize={12}
            />
            <YAxis 
              stroke={isDark ? '#9CA3AF' : '#6B7280'}
              fontSize={12}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                border: isDark ? '1px solid #374151' : '1px solid #E5E7EB',
                borderRadius: '8px',
                color: isDark ? '#FFFFFF' : '#000000'
              }}
            />
            <Line
              type="monotone"
              dataKey="users"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default DashboardChart;
