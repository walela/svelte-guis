<script lang="ts">
  import gh from "./assets/gh.svg";
  import Counter from "./components/Counter.svelte";
  import Todo from "./components/Todo.svelte";
</script>

<div class="w-3/4 mx-auto py-6 flex flex-col h-screen">
  <h1 class="text-3xl text-center text-gray-700 extrabold mb-4">
    Svelte GUIs
  </h1>
  <main class="flex gap-3">

    <Counter />
    <Todo />
  </main>
  <footer class="mt-auto mx-auto">
    <a href="https://github.com/walela/svelte-guis">
      <img src={gh} alt="github logo" class="w-8 cursor-pointer" />
    </a>
  </footer>
</div>
