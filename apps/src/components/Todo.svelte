<script lang="ts">
  import Layout from "./Layout.svelte";
  import type { Todo } from "../types";

  let todo: Todo = { text: "", completed: false };
  let error = "";
  let todos: Todo[] = [{ text: "Learn Svelte", completed: false }];

  $: {
    if (todo.text) {
      error = "";
    }
  }
  const addTask = () => {
    if (todo.text.trim()) {
      todos = [...todos, todo];
    } else {
      error = "Please enter a task";
    }
    todo = { text: "", completed: false };
  };
</script>

<Layout title="To Do" width={96}>
  <div class="flex gap-2 mb-1">
    <input
      type="text"

      class={`${error && 'border-2 border-red-400'} border px-2 py-2 w-48 rounded focus:border-indigo-500`}
      bind:value={todo.text} />
    <button
      on:click={addTask}
      class="shadow-sm px-4 py-2 bg-gray-200 border rounded-md text-gray-700 text-medium hover:shadow"
      >Add Todo</button>
  </div>
  <span class="text-red-400 mb-2">{error}</span>
  <ol class="mt-2">
    {#each todos as todo}
      <li
        on:click={() => (todo.completed = !todo.completed)}
        class={`${
          todo.completed && "line-through text-gray-400"
        } text-gray-700 px-1 list-decimal ml-4 cursor-pointer hover:line-through hover:text-gray-400`}>
        {todo.text}
      </li>
    {/each}
  </ol>
</Layout>
