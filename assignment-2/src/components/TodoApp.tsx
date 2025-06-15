import React, { useState, useMemo } from 'react';
import { CheckSquare, TrendingUp } from 'lucide-react';
import { Task, FilterType, SortType } from '../types/todo';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { TaskInput } from './TaskInput';
import { FilterControls } from './FilterControls';
import { TaskList } from './TaskList';

export function TodoApp() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('todo-tasks', []);
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('date');

  const taskCounts = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const active = total - completed;
    return { total, active, completed };
  }, [tasks]);

  const completionPercentage = useMemo(() => {
    if (tasks.length === 0) return 0;
    return Math.round((taskCounts.completed / taskCounts.total) * 100);
  }, [tasks.length, taskCounts]);

  const addTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      createdAt: new Date(),
      ...taskData,
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-600 rounded-xl">
              <CheckSquare size={32} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">TodoFlow</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Stay organized and productive with your personal task manager
          </p>
        </div>

        {/* Progress Stats */}
        {tasks.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrendingUp size={20} className="text-green-600" />
                <h2 className="text-lg font-semibold text-gray-900">Progress Overview</h2>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {completionPercentage}%
                </div>
                <div className="text-sm text-gray-500">Complete</div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{taskCounts.total}</div>
                <div className="text-sm text-gray-500">Total Tasks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600">{taskCounts.active}</div>
                <div className="text-sm text-gray-500">Active</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{taskCounts.completed}</div>
                <div className="text-sm text-gray-500">Completed</div>
              </div>
            </div>
          </div>
        )}

        {/* Task Input */}
        <TaskInput onAddTask={addTask} />

        {/* Filter Controls */}
        {tasks.length > 0 && (
          <FilterControls
            currentFilter={filter}
            currentSort={sort}
            onFilterChange={setFilter}
            onSortChange={setSort}
            taskCounts={taskCounts}
          />
        )}

        {/* Task List */}
        <TaskList
          tasks={tasks}
          filter={filter}
          sort={sort}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}