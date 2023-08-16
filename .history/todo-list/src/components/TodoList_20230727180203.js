import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Зробити покупки', completed: false },
    { id: 2, text: 'Вивчити React', completed: true },
    { id: 3, text: 'Створити Todo list', completed: false },
  ]);

  const handleToggle = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <h2>Список завдань:</h2>
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
