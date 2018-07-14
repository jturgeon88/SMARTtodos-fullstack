import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';



class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, createTodo, errors, updateTodo, deleteTodo } = this.props;
    const ListOfTodos = todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
      )
    );
    return (
      <div>
        <ul className="todo-list">
          {ListOfTodos}
        </ul>
        <TodoForm
          errors={errors}
          createTodo={createTodo}
        />
      </div>
    )
  }
}

export default TodoList;
