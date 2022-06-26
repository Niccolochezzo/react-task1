import { useRef, useState, useEffect } from "react";
import Button from "./CounterButton";

const _todoItems = [
  { id: 1, text: "text 1", completed: true },
  { id: 2, text: "text 2", completed: false },
  { id: 3, text: "text 3", completed: true },
];

export default function TodoApp() {
  const [inputValue, setinputValue] = useState("");
  const [todoItems, settodoItems] = useState(_todoItems);
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, [todoItems]);

  function handleSubmit(e) {
    e.preventDefault();
    let todoItem = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    setinputValue("");
    settodoItems([todoItem, ...todoItems]);
  }

  function checking(id) {
    const changedItems = todoItems.map((items) => {
      if (items.id === id) {
        items.completed = !items.completed;
      }
      return items;
    });
    settodoItems(changedItems);
  }

  function deleted(id) {
    const removeItem = todoItems.filter((items) => {
      return items.id !== id;
    });

    settodoItems(removeItem);
  }

  return (
    <div>
      <h3>Todo App</h3>
      <form onSubmit={handleSubmit}>
        <input
          ref={input}
          type="text"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        />
        <Button type="submit" text="Add Items" cusClass="Btn-counter" />
      </form>

      <ul>
        {todoItems.map((items, index) => {
          return (
            <li key={index}>
              <input
                type="checkbox"
                checked={items.completed}
                onChange={() => checking(items.id)}
              />
              <span>{items.text}</span>
              <Button
                text="Delete"
                cusClass="Btn-counter"
                onClick={() => deleted(items.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
