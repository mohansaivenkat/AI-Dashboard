import React from 'react';

const FilterControls = ({ selectedSeverity, setSelectedSeverity, sortOrder, setSortOrder }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 transform hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="w-full md:w-auto">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2" htmlFor="severity-filter">
            Filter by Severity
          </label>
          <div className="flex flex-wrap gap-2">
            {['All', 'Low', 'Medium', 'High'].map((severity) => (
              <button
                key={severity}
                onClick={() => setSelectedSeverity(severity)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedSeverity === severity
                    ? 'bg-blue-600 text-white shadow-md transform scale-105'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {severity}
              </button>
            ))}
          </div>
        </div>
        
        <div className="w-full md:w-auto">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2" htmlFor="sort-order">
            Sort by Date
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setSortOrder('newest')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                sortOrder === 'newest'
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Newest First
            </button>
            <button
              onClick={() => setSortOrder('oldest')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                sortOrder === 'oldest'
                  ? 'bg-blue-600 text-white shadow-md transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Oldest First
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;