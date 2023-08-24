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
  const [filterOption, setFilterOption] = useState('all'); // Додали стан для фільтрації

  const handleToggle = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  //add button delete
  const handleDeleteTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
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
        <button onClick={() => setFilterOption('all')}>Всі</button>
        <div className="dropdown">
          <button className="dropbtn">Фільтр</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => setFilterOption('completed')}>Виконані</a>
            <a href="#" onClick={() => setFilterOption('notCompleted')}>Невиконані</a>
          </div>
        </div>
      </div>
      <ul>
        {todos
          .filter(todo => {
            if (filterOption === 'completed') {
              return todo.completed;
            } else if (filterOption === 'notCompleted') {
              return !todo.completed;
            }
            return true; // Для опції 'all'
          })
          .map(todo => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onToggle={() => handleToggle(todo.id)}
              onDelete={() => handleDeleteTodo(todo.id)}
            />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;
