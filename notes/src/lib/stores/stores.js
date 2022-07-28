import { readable, writable, derived } from "svelte/store";

export const count = writable(0);
// the first argument to readable is the initial value which can be null
// or undefined if you don't have one yet. the second argument is a 'start'
// function that takes a setter function as an argument. the start function is called
// when the store gets its first subscriber. it returns a 'stop'
// function that is called when the last subscriber stops listening.
export const time = readable(null, function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);
  return function stop() {
    clearInterval(interval);
  };
});

