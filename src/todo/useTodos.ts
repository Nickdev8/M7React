import { useReducer } from "react";
import {
  createTodo,
  getInitialTodos,
  normalizeTodoText,
  type TodoItem,
} from "./todoModel";

interface TodosState {
  items: TodoItem[];
}

type TodosAction =
  | {
      type: "todo/added";
      todo: TodoItem;
    }
  | {
      type: "todo/toggled";
      id: TodoItem["id"];
    }
  | {
      type: "todo/removed";
      id: TodoItem["id"];
    };

export interface UseTodosResult {
  todos: TodoItem[];
  addTodo: (text: string) => boolean;
  toggleTodo: (id: TodoItem["id"]) => void;
  removeTodo: (id: TodoItem["id"]) => void;
}

function todosReducer(state: TodosState, action: TodosAction): TodosState {
  switch (action.type) {
    case "todo/added":
      return {
        ...state,
        items: [...state.items, action.todo],
      };
    case "todo/toggled":
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "todo/removed":
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

function createInitialState(): TodosState {
  return {
    items: getInitialTodos(),
  };
}

export function useTodos(): UseTodosResult {
  const [state, dispatch] = useReducer(
    todosReducer,
    undefined,
    createInitialState
  );

  function addTodo(text: string): boolean {
    const normalizedText = normalizeTodoText(text);

    if (!normalizedText) {
      return false;
    }

    dispatch({
      type: "todo/added",
      todo: createTodo(normalizedText),
    });

    return true;
  }

  function toggleTodo(id: TodoItem["id"]): void {
    dispatch({
      type: "todo/toggled",
      id,
    });
  }

  function removeTodo(id: TodoItem["id"]): void {
    dispatch({
      type: "todo/removed",
      id,
    });
  }

  return {
    todos: state.items,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}
