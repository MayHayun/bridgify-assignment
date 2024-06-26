# Todo List Application

This is a simple Todo list application built with React, featuring drag-and-drop functionality using `react-beautiful-dnd` and data persistence using browser's local storage.

## Features

- Add new tasks to the list.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed.
- Drag and drop tasks to reorder them.
- Data persists even after page refresh using local storage.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-list.git
   cd todo-list

2. Install dependencies:

   ```bash
    npm install
    Run the application:

3. Run code
   ```bash
    npm start
    The application will open in your default browser at http://localhost:3000.

## Usage

Adding a Todo: Enter a task in the input field and press Enter or click Add.
Editing a Todo: Click Edit on a task, make changes in the input field, and press Enter or click Save.
Deleting a Todo: Click Delete on a task to remove it from the list.
Marking as Completed: Click on a task to toggle its completion status.
Reordering Todos: Drag and drop a task to rearrange its position in the list.
Persistence: Todos are saved to local storage automatically. They will persist even after closing or refreshing the page.
Technologies Used

## React
react-beautiful-dnd
Tailwind CSS (for styling)
Local Storage (for data persistence)

## Folder Structure

bridgify-assignment/
│
├── public/
│   ├── index.html
│   └── ...
│
└── src/
    ├── components/
    │   ├── AddTodo.js
    │   ├── EditTodo.js
    │   ├── Header.js
    │   ├── TodoItem.js
    │   ├── TodoList.js
    │   └── ...
    ├── App.js
    ├── index.js
    └── ...

