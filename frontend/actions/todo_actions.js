import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


// This action creator lets our reducer know to RESET the list of todos
// to the set of todos (array) provided
// NOTE: ARRAY of todos is passed to this action creator as opposed to an object of todos because that's how
// the BACKEND will send data to our frontend. It will be the job of our reducer to then turn this
// array into an object
export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

// Receives a single todo object
export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo
});


// Thunk Action Creators

export const fetchTodos = () => dispatch => (
  TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = todo => dispatch => (
  TodoAPIUtil.createTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updateTodo = todo => dispatch => (
  TodoAPIUtil.updateTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const deleteTodo = todo => dispatch => (
  TodoAPIUtil.deleteTodo(todo)
    .then(todo => dispatch(removeTodo(todo)))
);
