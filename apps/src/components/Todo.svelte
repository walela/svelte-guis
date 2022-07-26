<script lang="ts">
    import Layout from "./Layout.svelte"
</script>

<Layout title="To Do" width={96}>
    <input
    type="text"
    disabled
    class="border px-2 text-gray-700 rounded"
    bind:value={count} />
</Layout>