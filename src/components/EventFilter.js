import React, { useState } from 'react';

const EventFilter = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div>
      <select value={selectedCategory} onChange={handleFilterChange}>
        <option value="">All Categories</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
      </select>
    </div>
  );
};

export default EventFilter;
