import React from 'react';
import { useDrag } from 'react-dnd';
import { Calendar, User } from 'lucide-react';
import { Task } from './KanbanBoard';

interface KanbanCardProps {
  task: Task;
  columnId: string;
}

export const KanbanCard: React.FC<KanbanCardProps> = ({ task, columnId }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { id: task.id, columnId },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const priorityColors = {
    low: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400',
    high: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400',
  };

  return (
    <div
      ref={drag}
      className={`p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 cursor-move transition-all hover:shadow-md ${
        isDragging ? 'opacity-50 rotate-2 scale-105' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <h5 className="font-medium text-gray-900 dark:text-white text-sm">
          {task.title}
        </h5>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
        {task.description}
      </p>
      
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div className="flex items-center space-x-1">
          <User className="w-3 h-3" />
          <span>{task.assignee}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="w-3 h-3" />
          <span>{new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};