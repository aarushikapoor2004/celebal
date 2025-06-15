import React, { useState } from 'react';
import { Check, Trash2, AlertCircle } from 'lucide-react';
import { Task } from '../types/todo';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => onDelete(task.id), 150);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-50';
      case 'medium': return 'border-l-amber-500 bg-amber-50';
      case 'low': return 'border-l-green-500 bg-green-50';
      default: return 'border-l-gray-300 bg-gray-50';
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'high') {
      return <AlertCircle size={16} className="text-red-500" />;
    }
    return null;
  };

  return (
    <div
      className={`group border-l-4 bg-white rounded-r-lg shadow-sm border border-gray-100 p-4 transition-all duration-200 hover:shadow-md ${
        getPriorityColor(task.priority)
      } ${isDeleting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} ${
        task.completed ? 'opacity-75' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(task.id)}
          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
            task.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
          }`}
        >
          {task.completed && <Check size={16} />}
        </button>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            {getPriorityIcon(task.priority)}
            <p
              className={`text-gray-900 transition-all duration-200 ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.text}
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {new Date(task.createdAt).toLocaleDateString()} • {task.priority} priority
          </p>
        </div>
        
        <button
          onClick={handleDelete}
          className="flex-shrink-0 p-2 text-gray-400 hover:text-red-500 transition-colors duration-200 opacity-0 group-hover:opacity-100"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}