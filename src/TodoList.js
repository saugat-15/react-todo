import React, { useEffect, useState } from "react";
import axios from "axios";

function TodoList() {
    //   const [todos, setTodos] = useState(["play Soccer at 7"]);
    const url = "http://localhost:3004/tasks";
    const [todos, setTodos] = useState(null);

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setTodos(response.data);
            })
            .then(console.log(todos))
            .catch((err) => console.log(err.message));
    }, [todos]);

  if (todos) {
    return (
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo, i) => (
            <li key={i}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  return <div></div>;
}

export default TodoList;
