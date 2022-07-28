<script lang="ts">
  import Layout from "./Layout.svelte";
  import { todo, todos, count, addTodo, error } from "../stores";
</script>

<Layout title="To Do" width={96}>
  <div class="flex gap-2 mb-1">
    <input
      type="text"
      class={`${
        $error && "border-2 border-red-400"
      } border px-2 py-2 w-48 rounded focus:border-indigo-500`}
      bind:value={$todo.text} />
    <button on:click={addTodo} class="grey-button">Add Todo</button>
  </div>
  {#if $error}
    <span class="text-red-400 block mb-1">{$error}</span>
  {/if}
  <span class="text-gray-900 mb-2 extrabold"
    >{$count} {$count === 1 ? "task" : "tasks"} left</span>
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

<style>
  .grey-button {
    background-color: rgb(229 231 235);
    color: rgb(55 65 81);
    border-width: 1px;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    font-weight: 500;
    --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
  .grey-button:hover {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color),
      0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
</style>
