import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Save, Bell, Shield, User, Palette } from 'lucide-react';

const accentColors = [
  { name: 'indigo', label: 'Indigo', class: 'bg-indigo-500' },
  { name: 'emerald', label: 'Emerald', class: 'bg-emerald-500' },
  { name: 'amber', label: 'Amber', class: 'bg-amber-500' },
  { name: 'rose', label: 'Rose', class: 'bg-rose-500' },
  { name: 'violet', label: 'Violet', class: 'bg-violet-500' },
];

export const Settings: React.FC = () => {
  const { theme, accentColor, toggleTheme, setAccentColor } = useTheme();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Customize your dashboard experience and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appearance Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Palette className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Appearance
            </h3>
          </div>

          {/* Theme Toggle */}
          <div className="mb-6">
            <label className="flex items-center justify-between">
              <div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Dark Mode
                </span>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Switch between light and dark themes
                </p>
              </div>
              <button
                onClick={toggleTheme}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </label>
          </div>

          {/* Accent Color */}
          <div>
            <span className="text-sm font-medium text-gray-900 dark:text-white block mb-3">
              Accent Color
            </span>
            <div className="grid grid-cols-5 gap-3">
              {accentColors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setAccentColor(color.name as any)}
                  className={`w-12 h-12 rounded-xl ${color.class} ring-2 transition-all flex items-center justify-center ${
                    accentColor === color.name
                      ? 'ring-indigo-500 scale-110'
                      : 'ring-transparent hover:ring-gray-300'
                  }`}
                  title={color.label}
                >
                  {accentColor === color.name && (
                    <div className="w-3 h-3 bg-white rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Profile
            </h3>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                defaultValue="john@example.com"
                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Role
              </label>
              <select className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                <option>Administrator</option>
                <option>Manager</option>
                <option>User</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
              <Bell className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Notifications
            </h3>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Email Notifications', description: 'Receive notifications via email' },
              { label: 'Push Notifications', description: 'Browser push notifications' },
              { label: 'Task Reminders', description: 'Reminders for upcoming tasks' },
              { label: 'Weekly Reports', description: 'Weekly activity summaries' },
            ].map((setting, index) => (
              <label key={index} className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {setting.label}
                  </span>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {setting.description}
                  </p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600 transition-colors">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </label>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Security
            </h3>
          </div>

          <div className="space-y-4">
            <button className="w-full p-3 text-left bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Change Password
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Update your account password
              </div>
            </button>
            <button className="w-full p-3 text-left bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Two-Factor Authentication
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Add an extra layer of security
              </div>
            </button>
            <button className="w-full p-3 text-left bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Active Sessions
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Manage your active login sessions
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
};