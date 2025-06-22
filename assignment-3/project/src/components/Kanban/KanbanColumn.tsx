import React from 'react';
import { useDrop } from 'react-dnd';
import { KanbanCard } from './KanbanCard';
import { Column } from './KanbanBoard';

interface KanbanColumnProps {
  column: Column;
  onMoveTask: (taskId: string, sourceColumnId: string, targetColumnId: string) => void;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ column, onMoveTask }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'task',
    drop: (item: { id: string; columnId: string }) => {
      if (item.columnId !== column.id) {
        onMoveTask(item.id, item.columnId, column.id);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`min-h-[400px] p-4 rounded-xl transition-all ${
        isOver
          ? 'bg-indigo-50 dark:bg-indigo-900/20 border-2 border-dashed border-indigo-300 dark:border-indigo-600'
          : 'bg-gray-50 dark:bg-gray-700/50'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-medium text-gray-900 dark:text-white">
          {column.title}
        </h4>
        <span className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full">
          {column.tasks.length}
        </span>
      </div>
      
      <div className="space-y-3">
        {column.tasks.map(task => (
          <KanbanCard
            key={task.id}
            task={task}
            columnId={column.id}
          />
        ))}
      </div>
    </div>
  );
};