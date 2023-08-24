import React from 'react';
import './TodoList.css';
const TodoItem = ({ text, completed, onToggle, onDelete }) => {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button className="delete-button" onClick={onDelete}>X</button>
    </li>
  );
};

export default TodoItem;
