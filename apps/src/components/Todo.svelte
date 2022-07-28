<script lang="ts">
  import Layout from "./Layout.svelte";
  import { todo, todos, count, addTodo, error } from "../stores";
  console.log($error)
</script>

<Layout title="To Do" width={96}>
  <div class="flex gap-2 mb-1">
    <input
      type="text"
      class={`${
        $error && "border-2 border-red-400"
      } border px-2 py-2 w-48 rounded focus:border-indigo-500`}
      bind:value={$todo.text} />
    <button on:click={addTodo} class="shadow-sm px-4 py-2 bg-gray-200 border rounded-md text-gray-700 text-medium hover:shadow">Add Todo</button>
  </div>
  {#if $error}
    <span class="text-red-400 block mb-1">{$error}</span>
  {/if}
  <span class="text-gray-900 mb-2 extrabold">{$count} {$count === 1 ? "task" : "tasks"} left</span>
  <ol class="mt-2">
    {#each $todos as todoItem}
      <li
        on:click={() => (todoItem.completed = !todoItem.completed)}
        class={`${
          todoItem.completed && "line-through text-gray-400"
        } text-gray-700 px-1 list-decimal ml-4 cursor-pointer hover:line-through hover:text-gray-400`}>
        {todoItem.text}
      </li>
    {/each}
  </ol>
</Layout>
