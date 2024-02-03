import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-card">
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChange(props.todo.id)}
      />
      <p className={props.todo.completed ? 'completed' : null}>
        {props.todo.name}
      </p>
    </div>
  );
}

export default TodoItem;
