<script lang="ts">
  export let title = "Hello, Svelte!";
  export let width = 64;
</script>

<div class={`border w-${width} rounded shadow-sm pb-6`}>
  <div class="bg-gray-100 py-2 mb-6 pl-6">
    <h1 class="bold text-lg text-blue-600 uppercase">{title}</h1>
  </div>
  <div class="ml-6">
    <slot />
  </div>
  
</div>
