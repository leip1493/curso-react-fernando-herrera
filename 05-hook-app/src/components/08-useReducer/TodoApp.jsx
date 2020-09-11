import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import "./styles.css";

const init = () => JSON.parse(localStorage.getItem("todos")) || [];
const addAction = (payload) => ({ type: "add", payload });
const deleteAction = (payload) => ({ type: "delete", payload });
const toggleAction = (payload) => ({ type: "toggle", payload });

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => dispatch(deleteAction(todoId));

  const handleAddTodo = (newTodo) => dispatch(addAction(newTodo));

  const handleToggle = (todoId) => dispatch(toggleAction(todoId));

  return (
    <div>
      <h1>TodoApp: ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList {...{ todos, handleToggle, handleDelete }} />
        </div>
        <div className="col-5">
          <TodoAdd {...{ handleAddTodo }} />
        </div>
      </div>
    </div>
  );
};
