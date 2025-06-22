import React from 'react';
import { Calendar } from '../components/Calendar/Calendar';

export const CalendarPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Calendar
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Schedule and manage your events and appointments.
        </p>
      </div>

      <Calendar />
    </div>
  );
};