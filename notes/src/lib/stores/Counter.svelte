<script>
  // count is a store - an object with a subscribe method, which emits a new value
  // to subscribers when the value(count) changes.
  // count is also a 'writable' store, which means it has 'set' and 'update' methods
  // on top of the subscribe method.
  import { count } from "./stores";
  // custom store
  import { doubleCount } from "./stores";
  import Incrementer from "./Incrementer.svelte";
  import Decrementer from "./Decrementer.svelte";
  import Resetter from "./Resetter.svelte";
</script>

<h1>The count is {$count}</h1>
<Incrementer />
<Decrementer />
<Resetter />
<h1>Custom count - {$doubleCount}</h1>
<button on:click={doubleCount.increment}>Double Count</button>