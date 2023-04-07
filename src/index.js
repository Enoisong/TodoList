import './style.css';
import render from './todosRender.js';
import Todos from './todos.js';

const todosList = new Todos();
render(todosList);