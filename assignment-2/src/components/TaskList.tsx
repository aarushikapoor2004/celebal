import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Task, FilterType, SortType } from '../types/todo';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  filter: FilterType;
  sort: SortType;
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskList({ tasks, filter, sort, onToggleTask, onDeleteTask }: TaskListProps) {
  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    switch (sort) {
      case 'alphabetical':
        return a.text.localeCompare(b.text);
      case 'priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      case 'date':
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  if (sortedTasks.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
        <CheckCircle2 size={48} className="text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          {filter === 'completed' ? 'No completed tasks yet' : 
           filter === 'active' ? 'No active tasks' : 'No tasks yet'}
        </h3>
        <p className="text-gray-500">
          {filter === 'completed' ? 'Complete some tasks to see them here.' :
           filter === 'active' ? 'All tasks are completed! Great job!' :
           'Add your first task to get started.'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {sortedTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
}