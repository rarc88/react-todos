import React from "react";

export const TodoItem = ({ todo, toggleTodo }) => {
  const handleClick = (e) => toggleTodo(todo.id);

  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={handleClick} />{" "}
      {todo.task}
    </li>
  );
};
