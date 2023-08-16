import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Зробити покупки', completed: false },
    { id: 2, text: 'Вивчити React', completed: true },
    { id: 3, text: 'Створити Todo list', completed: false },
  ]);
  const [showCompleted, setShowCompleted] = useState(true);

  const handleToggle = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() === '') return;
    const newTodo = {
      id: todos.length + 1,
      text: inputText,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputText('');
  };

  return (
    <div className="container">
      <h2>Список завдань:</h2>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Введіть нове завдання"
        />
        <button onClick={handleAddTodo}>Додати</button>
      </div>
      <div>
        <button onClick={() => setShowCompleted(true)}>Виконані</button>
        <button onClick={() => setShowCompleted(false)}>Невиконані</button>
      </div>
      <ul>
        {todos
          .filter(todo => showCompleted ? true : !todo.completed)
          .map(todo => (
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
