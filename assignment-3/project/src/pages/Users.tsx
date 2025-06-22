import React from 'react';
import { DataTable } from '../components/Tables/DataTable';

export const Users: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          User Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage user accounts, permissions, and access levels.
        </p>
      </div>

      <DataTable />
    </div>
  );
};