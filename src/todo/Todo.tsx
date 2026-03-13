import { useState, type FormEvent } from "react";
import { useTodos } from "./useTodos";

export function Todo() {
  const [newTodo, setNewTodo] = useState<string>("");
  const { todos, addTodo, toggleTodo, removeTodo } = useTodos();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const wasAdded = addTodo(newTodo);

    if (wasAdded) {
      setNewTodo("");
    }
  }

  return (
    <section>
      <div>
        <h1>Todo</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a todo"
            value={newTodo}
            onChange={(event) => setNewTodo(event.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        {todos.length === 0 ? (
          <p>No todos yet.</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span>{todo.done ? <s>{todo.text}</s> : todo.text}</span>
                </label>

                <button type="button" onClick={() => removeTodo(todo.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
