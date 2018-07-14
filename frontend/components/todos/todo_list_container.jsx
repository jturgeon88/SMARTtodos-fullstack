// The purpose of this component is to allow the presentational component,
// todo_list, to be as lightweight as possible.
// Here we'll map the application state and the Store's dispatch function
// to a set of props that get passed to the presentational component.

import { connect } from 'react-redux';
import TodoList from './todo_list';
// Actions:
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../../actions/todo_actions';
import { allTodos } from '../../reducers/selectors';


const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  updateTodo: todo => dispatch(updateTodo(todo)),
  deleteTodo: todo => dispatch(deleteTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
