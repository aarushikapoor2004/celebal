import React from 'react';
import { Bell, Search, User, Settings, LogOut } from 'lucide-react';
import { Menu } from '@headlessui/react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 
                       focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Administrator</p>
              </div>
            </Menu.Button>

            <Menu.Items className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm text-left ${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } text-gray-700 dark:text-gray-300`}
                  >
                    <User className="w-4 h-4 mr-3" />
                    Profile
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm text-left ${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } text-gray-700 dark:text-gray-300`}
                  >
                    <Settings className="w-4 h-4 mr-3" />
                    Settings
                  </button>
                )}
              </Menu.Item>
              <hr className="my-1 border-gray-200 dark:border-gray-700" />
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`flex items-center w-full px-4 py-2 text-sm text-left ${
                      active ? 'bg-gray-100 dark:bg-gray-700' : ''
                    } text-red-600 dark:text-red-400`}
                  >
                    <LogOut className="w-4 h-4 mr-3" />
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </header>
  );
};