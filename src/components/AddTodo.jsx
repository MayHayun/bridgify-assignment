import React, { useState } from 'react';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Task cannot be empty');
      return;
    }
    addTodo(text);
    setText('');
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded shadow-sm"
          placeholder="Add a new task"
        />
        <button
          type="submit"
          className="ml-2 p-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
};

export default AddTodo;