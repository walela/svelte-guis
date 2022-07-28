<script>
  import { count } from "./stores";

  function decrement() {
    count.update((value) => value - 1);
  }
</script>

<button on:click={decrement}> - </button>
