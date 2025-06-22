import React from 'react';
import { KanbanBoard } from '../components/Kanban/KanbanBoard';

export const KanbanPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Kanban Board
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Organize and track your projects with visual task management.
        </p>
      </div>

      <KanbanBoard />
    </div>
  );
};