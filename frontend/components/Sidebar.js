import React from 'react';

const Sidebar = ({ categories, onCategorySelect }) => {
  return (
    <aside className="w-64 bg-gray-200 h-full p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category} className="mb-2">
            <button
              className="text-left w-full text-gray-700 hover:bg-gray-300 p-2 rounded"
              onClick={() => onCategorySelect(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
