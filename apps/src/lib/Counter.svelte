<script lang="ts">
  import Layout from "./Layout.svelte";
  let count: number = 0;
</script>

<Layout title="Counter" width={96}>
  <div class="flex gap-2 mb-4">
    <input
      type="text"
      disabled
      class="border px-2 text-gray-700 rounded"
      bind:value={count} />
    <button
      on:click={() => (count += 1)}
      class="shadow-sm px-4 py-2 bg-blue-600 border rounded-md text-white text-medium hover:shadow-md hover:bg-blue-700">
      Count
    </button>
  </div>
  <button
    on:click={() => (count = 0)}
    class="shadow-sm px-4 py-2 bg-gray-200 border rounded-md text-gray-700 text-medium hover:shadow hover:bg-gray-300"
    >Reset Count</button>
</Layout>
