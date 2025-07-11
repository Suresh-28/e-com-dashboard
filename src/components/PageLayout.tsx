
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import BackToDashboard from './BackToDashboard';
import ThemeToggle from './ThemeToggle';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  isDark?: boolean;
  onToggleTheme?: () => void;
}

const PageLayout = ({ 
  children, 
  title, 
  subtitle, 
  isDark = true, 
  onToggleTheme 
}: PageLayoutProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/30">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700"
      >
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <BackToDashboard isDark={isDark} />
              <div>
                <motion.h1
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
                >
                  {title}
                </motion.h1>
                {subtitle && (
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-sm text-slate-600 dark:text-slate-400 mt-1"
                  >
                    {subtitle}
                  </motion.p>
                )}
              </div>
            </div>
            
            {onToggleTheme && (
              <div className="flex items-center space-x-4">
                <motion.div
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Premium
                </motion.div>
                <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
              </div>
            )}
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            {children}
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default PageLayout;
