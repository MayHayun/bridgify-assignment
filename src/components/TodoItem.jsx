import React, { useState } from 'react';
import EditTodo from './EditTodo';

const TodoItem = ({ todo, deleteTodo, editTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex items-center justify-between bg-gray-200 p-4 mb-2 rounded shadow-sm">
      {isEditing ? (
        <EditTodo todo={todo} editTodo={editTodo} setIsEditing={setIsEditing} />
      ) : (
        <>
          <span
            className={`flex-1 cursor-pointer ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
            onClick={() => toggleComplete(todo.id)}
          >
            {todo.text}
          </span>
          <div className="flex items-center space-x-2">
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;