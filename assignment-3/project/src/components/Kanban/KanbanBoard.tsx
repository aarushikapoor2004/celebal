import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { KanbanColumn } from './KanbanColumn';
import { Plus } from 'lucide-react';

export interface Task {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      {
        id: '1',
        title: 'Design Homepage',
        description: 'Create wireframes and mockups for the new homepage',
        assignee: 'John Doe',
        priority: 'high',
        dueDate: '2024-02-15'
      },
      {
        id: '2',
        title: 'API Integration',
        description: 'Integrate payment gateway API',
        assignee: 'Jane Smith',
        priority: 'medium',
        dueDate: '2024-02-20'
      }
    ]
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    tasks: [
      {
        id: '3',
        title: 'User Authentication',
        description: 'Implement login and registration system',
        assignee: 'Bob Johnson',
        priority: 'high',
        dueDate: '2024-02-18'
      }
    ]
  },
  {
    id: 'review',
    title: 'Review',
    tasks: [
      {
        id: '4',
        title: 'Database Optimization',
        description: 'Optimize queries for better performance',
        assignee: 'Alice Brown',
        priority: 'medium',
        dueDate: '2024-02-12'
      }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: '5',
        title: 'Setup CI/CD',
        description: 'Configure GitHub Actions for deployment',
        assignee: 'Charlie Wilson',
        priority: 'low',
        dueDate: '2024-02-10'
      }
    ]
  }
];

export const KanbanBoard: React.FC = () => {
  const [columns, setColumns] = useState(initialColumns);

  const moveTask = (taskId: string, sourceColumnId: string, targetColumnId: string) => {
    setColumns(prevColumns => {
      const newColumns = [...prevColumns];
      
      // Find source and target columns
      const sourceColumn = newColumns.find(col => col.id === sourceColumnId);
      const targetColumn = newColumns.find(col => col.id === targetColumnId);
      
      if (!sourceColumn || !targetColumn) return prevColumns;
      
      // Find and remove task from source column
      const taskIndex = sourceColumn.tasks.findIndex(task => task.id === taskId);
      if (taskIndex === -1) return prevColumns;
      
      const [task] = sourceColumn.tasks.splice(taskIndex, 1);
      
      // Add task to target column
      targetColumn.tasks.push(task);
      
      return newColumns;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Project Board
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Manage tasks with drag and drop
              </p>
            </div>
            <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              <Plus className="w-4 h-4 mr-2" />
              Add Task
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {columns.map(column => (
              <KanbanColumn
                key={column.id}
                column={column}
                onMoveTask={moveTask}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};