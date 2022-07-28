<script>
  // count is a store - an object with a subscribe method, which emits a new value
  // to subscribers when the value(count) changes.
  // count is also a 'writable' store, which means it has 'set' and 'update' methods
  // on top of the subscribe method.
  import { count } from "./stores";
  import Incrementer from "./Incrementer.svelte";
  import Decrementer from "./Decrementer.svelte";
  import Resetter from "./Resetter.svelte";
  let countValue = 0;

  console.log(count);
  count.subscribe((value) => {
    countValue = value;
  });
</script>

<h1>The count is {countValue}</h1>
<Incrementer />
<Decrementer />
<Resetter />
