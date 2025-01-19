import React from "react";

function Filter({ selectedCategory, onCategoryChange }) {
  return (
    <div>
      <label htmlFor="filter">Filter by category</label>
      <select
        id="filter"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
