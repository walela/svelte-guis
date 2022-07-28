<script>
  import { count } from "./stores";

  function increment() {
    count.update((value) => value + 1);
  }
</script>

<button on:click={increment}> + </button>
