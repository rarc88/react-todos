import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, toggleTodo }) => {
  if (todos.length > 0) {
    return (
      <ul>
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    );
  } else {
    return <p>Empty</p>;
  }
};
