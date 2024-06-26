import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteTodo, editTodo, toggleComplete }) => (
  <div className="mt-6">
    {todos.length > 0 ? (
      todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
        />
      ))
    ) : (
      <p className="text-center text-gray-500">No tasks available</p>
    )}
  </div>
);

export default TodoList;