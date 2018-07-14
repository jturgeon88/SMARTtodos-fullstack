// Development
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

// TESTING:
// import { receiveTodos, receiveTodo } from './actions/todo_actions';
// import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';
// import { allTodos } from './reducers/selectors';
// import { stepsByTodoId } from './reducers/selectors';
import { fetchTodos, createTodo } from './actions/todo_actions';
// TESTING

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // Testing:
  window.store = store;
  // window.receiveSteps = receiveSteps;
  // window.receiveStep = receiveStep;
  // window.removeStep = removeStep;
  // window.stepsByTodoId = stepsByTodoId;
  window.fetchTodos = fetchTodos;
  window.createTodo = createTodo;

  // Testing

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
