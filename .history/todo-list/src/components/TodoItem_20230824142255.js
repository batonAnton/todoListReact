import React from 'react';

const TodoItem = ({ text, completed, onToggle,}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
    </li>

    //delete button
    
  );
};
const TodoItem = ({onTog })

export default TodoItem;
