<script lang="ts">
  import gh from "./assets/gh.svg";
  import Counter from "./lib/Counter.svelte";
</script>

<div class="w-3/4 mx-auto py-6 flex flex-col h-screen">
  <main>
    <h1 class="text-3xl text-center text-gray-700 extrabold mb-4">
      Svelte GUIs
    </h1>
    <Counter />
  </main>
  <footer class="mt-auto mx-auto">
    <a href="https://github.com/walela/svelte-guis">
      <img src={gh} alt="github logo" class="w-8 cursor-pointer" />
    </a>
  </footer>
</div>
