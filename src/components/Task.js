// Task.js
import React from "react";

function Task({ text, category, onDelete }) {
  const handleDelete = () => {
    onDelete(); // Call the onDelete callback prop when delete button is clicked
  };

  return (
    <div className="task">
      <p>{text}</p>
      <p>{category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
