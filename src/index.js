import './style.css';
import render from './todosRender.js';
import Todos from './todos.js';

// this function updates todo
const todosList = new Todos();
render(todosList);

// add event listener to the checkbox
const addTodoBtn = document.querySelector('.add-btn');
addTodoBtn.addEventListener('click', () => {
  const id = `id${Math.random().toString(16).slice(2)}`;
  const description = document.querySelector('.input-todo').value.trim();
  const completed = false;
  const index = todosList.list.length + 1;
  const newTodo = {
    id, description, completed, index,
  };
  if (description) {
    todosList.addTodo(newTodo);
    render(todosList);
  }
});

// this function clear all completed todos
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  todosList.clearCompletedTodos();
  render(todosList);
});
