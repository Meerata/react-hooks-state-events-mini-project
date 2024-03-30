// CategoryFilter.js
import React from "react";

function CategoryFilter({ categories, filter, onCategoryFilter }) {
  return (
    <div>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onCategoryFilter(category)}
          className={filter === category ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
