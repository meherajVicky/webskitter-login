import React, { useState } from "react";
import Button from "../ui/button/Button";
import Card from "../ui/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { todoAction } from "../redux/todo";

export default function Todo() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(todoAction.settodo(todo));
    setTodo("");
  };
  const todoData = useSelector((state) => state.todo.todoList);
  console.log(todoData);
  console.log(todo);
  return (
    <>
      <Card>
        <input
          className="control-input"
          type="todo"
          name="todo"
          placeholder="Enter your todo item"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <Button onClick={onSubmit}>Submit</Button>

        {todoData.length === 0 ? null : (
          <ul>
            {todoData.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}
