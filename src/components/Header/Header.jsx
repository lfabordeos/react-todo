import { useContext } from "react";
import { CompletedCountContext } from "../../context/CompletedCountContext";

export default function Header() {
  const date = new Date();

  return <h2>Todo List - {date.toLocaleDateString()}</h2>;
}
