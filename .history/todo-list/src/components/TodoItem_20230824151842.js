import React from 'react';
import './TodoList.css';
const TodoItem = ({ text, completed, onToggle, onDelete }) => {

  const handleEdit = () =>{
    setEditing(true)
  };

  const handleSave = () =>{
    setEditing(false);
  }
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      {editing ? (
        <div>
          <input
           type='text'
           value={editedText}
           onChange={(event) => setEditedText(event.target.value)}
           />
        </div>
      );
      <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button className="delete-button" onClick={onDelete}>X</button>
    </div>  
    </li>
  );
};

export default TodoItem;
