import type { Todo } from "./types";
import type { Writable } from "svelte/store";
import { writable, derived, get } from "svelte/store";

export const todo: Writable<Todo> = writable({ text: "", completed: false });
export const todos: Writable<Todo[]> = writable([
  { text: "Learn Svelte", completed: false },
]);
const formState = writable({ status: "idle" });
export const count = derived(todos, todos => {
  return todos.filter(todo => !todo.completed).length;
});
export const error = derived([todo, formState], ([$todo, $formState]) => {
  if ($formState.status === "submitted") {
    if (!$todo.text.trim()) {
      return "Please enter a task";
    } else if ($todo.text.length < 3) {
      return "Todo must be at least 3 characters long";
    }
    return "";
  }
});

export const addTodo = () => {
  formState.set({ status: "submitted" });
  let _error = get(error);
  if (!_error) {
    let _todo = get(todo);
    todos.update(todos => {
      todos.push(_todo);
      todo.update(() => ({ text: "", completed: false }));
      return todos;
    });
    formState.set({ status: "idle" });
  }
};
