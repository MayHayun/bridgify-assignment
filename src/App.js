import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([]);

  // Load todos from local storage on initial render
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    console.log('Saved Todos:', savedTodos);
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Log the todos state whenever it changes
  useEffect(() => {
    console.log('Updated Todos State:', todos);
  }, [todos]);

  // Save todos to local storage whenever todos state changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, text) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-4">
        <Header />
        <AddTodo addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
