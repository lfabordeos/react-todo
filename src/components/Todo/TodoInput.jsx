import { useContext, useEffect, useRef, useState } from "react";
import Checkbox from "./Checkbox";

export default function TodoInput({ addItem, initialTitle = "" }) {
  const [title, setTitle] = useState(initialTitle);

  const handleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const addTodo = (e) => {
    if (title && e.keyCode === 13) {
      addItem(title);
      setTitle("");
    }
  };

  const handleBlur = () => {
    initialTitle != "" && addItem(title);
  };

  return (
    <input
      autoFocus={initialTitle != ""}
      className="todo-item"
      type="text"
      value={title}
      onChange={handleInputChange}
      onKeyUp={addTodo}
      onBlur={handleBlur}
    />
  );
}
