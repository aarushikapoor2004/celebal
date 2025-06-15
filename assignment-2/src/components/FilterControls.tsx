import React from 'react';
import { Filter, SortAsc, CheckCircle, Circle, List } from 'lucide-react';
import { FilterType, SortType } from '../types/todo';

interface FilterControlsProps {
  currentFilter: FilterType;
  currentSort: SortType;
  onFilterChange: (filter: FilterType) => void;
  onSortChange: (sort: SortType) => void;
  taskCounts: {
    total: number;
    active: number;
    completed: number;
  };
}

export function FilterControls({
  currentFilter,
  currentSort,
  onFilterChange,
  onSortChange,
  taskCounts,
}: FilterControlsProps) {
  const filterOptions = [
    { value: 'all' as FilterType, label: 'All', icon: List, count: taskCounts.total },
    { value: 'active' as FilterType, label: 'Active', icon: Circle, count: taskCounts.active },
    { value: 'completed' as FilterType, label: 'Completed', icon: CheckCircle, count: taskCounts.completed },
  ];

  const sortOptions = [
    { value: 'date' as SortType, label: 'Date Created' },
    { value: 'alphabetical' as SortType, label: 'Alphabetical' },
    { value: 'priority' as SortType, label: 'Priority' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={18} className="text-gray-600" />
            <h3 className="font-medium text-gray-900">Filter Tasks</h3>
          </div>
          <div className="flex gap-2">
            {filterOptions.map(({ value, label, icon: Icon, count }) => (
              <button
                key={value}
                onClick={() => onFilterChange(value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  currentFilter === value
                    ? 'bg-blue-100 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                }`}
              >
                <Icon size={16} />
                {label}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  currentFilter === value
                    ? 'bg-blue-200 text-blue-800'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {count}
                </span>
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <SortAsc size={18} className="text-gray-600" />
            <h3 className="font-medium text-gray-900">Sort By</h3>
          </div>
          <select
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value as SortType)}
            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200 text-sm"
          >
            {sortOptions.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}