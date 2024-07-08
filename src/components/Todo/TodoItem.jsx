import { useContext, useEffect, useRef, useState } from "react";
import Checkbox from "./Checkbox";
import TodoInput from "./TodoInput";

export default function TodoItem({ todo, setTodos }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleIsComplete = () => {
    setTodos((prev) => {
      return prev.map((item) =>
        item.uuid === todo.uuid ? { ...item, completed: !todo.completed } : item
      );
    });
  };

  const toggleFocus = (e) => {
    e.target.getAttribute("type") !== "checkbox" && setIsFocused(true);
  };

  const handleUpdate = (title) => {
    setTodos((prev) => {
      return prev.map((item) =>
        item.uuid === todo.uuid ? { ...item, title } : item
      );
    });
    setIsFocused(false);
  };

  const deleteTodo = () => {
    setTodos((prev) => {
      return prev.filter((item) => item.uuid !== todo.uuid);
    });
  };

  return (
    <>
      {!isFocused ? (
        <div
          className="todo-item flex flex-row items-center justify-start"
          onClick={toggleFocus}
        >
          <p
            className={
              "mr-4 flex-grow " + (!!todo.completed ? "line-through" : "")
            }
          >
            {todo.title}
          </p>
          <Checkbox isChecked={todo.completed} toggle={handleIsComplete} />
          <button onClick={deleteTodo}>❌</button>
        </div>
      ) : (
        <TodoInput initialTitle={todo.title} addItem={handleUpdate} />
      )}
    </>
  );
}
