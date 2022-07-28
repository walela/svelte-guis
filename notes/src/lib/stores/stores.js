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

const start = new Date();

export const elapsed = derived(time, ($time) => {
  return Math.round(($time - start) / 1000);
});

// as long as an object correctly implements the 'subscribe' method,
// it can be used as a store. Beyond that, anything goes. It is therefore trivial
// to create custom stores with domain-specific logic
export const doubleCount = (() => {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update((n) => n + 2),
    decrement: () => update((n) => n - 2),
    reset: () => set(0),
  };
})();
