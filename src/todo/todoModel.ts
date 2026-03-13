export interface TodoItem {
  id: string;
  text: string;
  done: boolean;
}

function createTodoId(): string {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return String(Date.now() + Math.random());
}

export function createTodo(
  text: string,
  overrides: Partial<TodoItem> = {}
): TodoItem {
  return {
    id: createTodoId(),
    text,
    done: false,
    ...overrides,
  };
}

export function normalizeTodoText(text: string): string {
  return text.trim();
}

export function getInitialTodos(): TodoItem[] {
  return [
    createTodo("Finish the todo page"),
    createTodo("Mark a task as done", { done: true }),
  ];
}
