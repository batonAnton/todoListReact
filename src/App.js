
import React from 'react';
import TodoList from './components/TodoList';
import SearchBar from "./searchBar";

const App = () => {
  return (
    <div>
      <h1>Мій Todo List</h1>
      <TodoList />
      <div>
      <SearchBar />
    </div>
    
    </div>
    
  );
};

export default App;



