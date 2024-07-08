import { useEffect, useState } from "react";
import Header from "../Header/Header";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import Footer from "../Footer/Footer";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const addItem = (title) => {
    setTodos((prev) => [
      ...prev,
      { uuid: crypto.randomUUID(), title, complete: false },
    ]);
  };

  useEffect(() => {
    // Check local storage
    const storedTodos = localStorage.getItem("react-notes");

    if (storedTodos !== null) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    todos &&
      todos.length &&
      localStorage.setItem("react-notes", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todos-list w-full bg-yellow-50 pt-10 px-6 pb-3 rounded-md">
      <Header />
      <hr />
      <TodoInput addItem={addItem} />
      {todos.map((todo) => (
        <TodoItem key={todo.uuid} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
}
