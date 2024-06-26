import React, { useState } from 'react';

const EditTodo = ({ todo, editTodo, setIsEditing }) => {
  const [text, setText] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    editTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-1 items-center">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded shadow-sm"
      />
      <button
        type="submit"
        className="ml-2 p-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
      >
        Save
      </button>
    </form>
  );
};

export default EditTodo;