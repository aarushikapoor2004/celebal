import React from 'react';
import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import { StatsCard } from '../components/Dashboard/StatsCard';
import { AreaChart } from '../components/Charts/AreaChart';

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard Overview
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Welcome to your admin dashboard. Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Users"
          value="12,345"
          change="+12% from last month"
          changeType="positive"
          icon={Users}
          gradient="bg-gradient-to-br from-blue-500 to-blue-600"
        />
        <StatsCard
          title="Revenue"
          value="$54,321"
          change="+8% from last month"
          changeType="positive"
          icon={DollarSign}
          gradient="bg-gradient-to-br from-emerald-500 to-emerald-600"
        />
        <StatsCard
          title="Orders"
          value="3,456"
          change="-3% from last month"
          changeType="negative"
          icon={ShoppingCart}
          gradient="bg-gradient-to-br from-amber-500 to-amber-600"
        />
        <StatsCard
          title="Conversion Rate"
          value="3.2%"
          change="+0.5% from last month"
          changeType="positive"
          icon={TrendingUp}
          gradient="bg-gradient-to-br from-purple-500 to-purple-600"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AreaChart />
        
        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full p-4 text-left bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Create New User
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Add a new user to the system
                  </p>
                </div>
                <Users className="w-5 h-5 text-gray-400" />
              </div>
            </button>
            
            <button className="w-full p-4 text-left bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    View Reports
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Access detailed analytics
                  </p>
                </div>
                <TrendingUp className="w-5 h-5 text-gray-400" />
              </div>
            </button>
            
            <button className="w-full p-4 text-left bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    System Settings
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Configure application settings
                  </p>
                </div>
                <ShoppingCart className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          {[
            { user: 'John Doe', action: 'created a new user account', time: '2 minutes ago' },
            { user: 'Jane Smith', action: 'updated product pricing', time: '15 minutes ago' },
            { user: 'Bob Johnson', action: 'exported monthly report', time: '1 hour ago' },
            { user: 'Alice Brown', action: 'completed system backup', time: '2 hours ago' },
          ].map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">
                  {activity.user.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 dark:text-white">
                  <span className="font-medium">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};