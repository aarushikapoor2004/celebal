import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Task } from '../types/todo';

interface TaskInputProps {
  onAddTask: (task: Omit<Task, 'id' | 'createdAt'>) => void;
}

export function TaskInput({ onAddTask }: TaskInputProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [error, setError] = useState('');

  const validateTask = (taskText: string): string => {
    if (!taskText.trim()) {
      return 'Task cannot be empty';
    }
    if (taskText.trim().length < 3) {
      return 'Task must be at least 3 characters long';
    }
    if (taskText.trim().length > 100) {
      return 'Task must be less than 100 characters';
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateTask(text);
    if (validationError) {
      setError(validationError);
      return;
    }

    onAddTask({
      text: text.trim(),
      completed: false,
      priority,
    });

    setText('');
    setError('');
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    if (error) setError('');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <input
              type="text"
              value={text}
              onChange={handleTextChange}
              placeholder="What needs to be done?"
              className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 ${
                error 
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
                  : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
              }`}
            />
            {error && (
              <p className="text-red-500 text-sm mt-2 animate-fade-in">{error}</p>
            )}
          </div>
          
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
            className="px-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center gap-2 font-medium"
          >
            <Plus size={20} />
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}