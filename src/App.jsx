import React, { Fragment, useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

import { TodoList } from "./components/TodoList";

const App = () => {
  const TODOS_KEY = "reactTodos.todos";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem(TODOS_KEY);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  const todoTaskRef = useRef();

  const handleTodoAdd = () => {
    const task = todoTaskRef.current.value;
    if (task === "") return;
    setTodos([...todos, { id: v4(), task: task, completed: false }]);
    console.log(todos);
    todoTaskRef.current.value = null;
  };

  const handleClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  return (
    <Fragment>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div>
        <input ref={todoTaskRef} type="text" placeholder="New task" />
        <button onClick={handleTodoAdd}>+</button>
        <button onClick={handleClearCompleted}>-</button>
      </div>
      <p>{todos.filter((todo) => !todo.completed).length} todos left</p>
    </Fragment>
  );
};

export default App;
