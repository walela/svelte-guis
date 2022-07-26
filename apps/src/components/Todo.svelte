<script lang="ts">
  import Layout from "./Layout.svelte";
  interface Todo {
    text: string;
    completed: boolean;
  }
  let todo: Todo = { text: "", completed: false };
  let todos: Todo[] = [{ text: "Learn Svelte", completed: false }];
  const addTask = todo => {
    if (todo.text.trim()) {
      todos.push(todo);
      todos = todos;
      todo = { text: "", completed: false };
    }
  };
</script>

<Layout title="To Do" width={96}>
  <div class="flex gap-2 mb-4">
    <input
      type="text"
      class="border px-2 py-2 w-48 rounded focus:border-violet-500"
      bind:value={todo.text} />
    <button
      on:click={() => addTask(todo)}
      class="shadow-sm px-4 py-2 bg-gray-200 border rounded-md text-gray-700 text-medium hover:shadow"
      >Add Todo</button>
  </div>
  <ol>
    {#each todos as todo}
      <li
        on:click={() => (todo.completed = !todo.completed)}
        class={`${
          todo.completed && "line-through"
        } text-gray-700 px-1 list-decimal ml-4 cursor-pointer hover:line-through hover:text-gray-400`}>
        {todo.text}
      </li>
    {/each}
  </ol>
</Layout>
