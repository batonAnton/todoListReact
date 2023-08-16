import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  // Код з доданими стилями

  return (
    <div className="container"> {/* Додали клас контейнер */}
      <h2>Список завдань:</h2>
      <div className="input-container"> {/* Додали клас для контейнера поля вводу */}
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Введіть нове завдання"
        />
        <button onClick={handleAddTodo}>Додати</button>
      </div>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => handleToggle(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
