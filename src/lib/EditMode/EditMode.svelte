<script>
    import Section from "./Section.svelte";

    const emptySection = {
        title: "Section title goes here",
        description: "Description goes here",
        color: "",
        items: []
    }

    let {jsonData = $bindable()} = $props();
</script>

<h1>Edit Mode</h1>

<div class="header">
    <div>Title: </div><input type="text" bind:value={jsonData.title}>
    <div>Subtitle: </div><input type="text" bind:value={jsonData.subtitle}>
</div>

<h2>Sections</h2>

<div class="sections">
    {#each jsonData.sections || [] as section, idx}
    <Section {idx} bind:section={jsonData.sections[idx]} bind:sections={jsonData.sections} />
    {/each}
    <button onclick={() => jsonData.sections.push({...emptySection})}>Add Section</button>
</div>

<style>
    .header {
        display: grid;
        grid-template-columns: 1fr 3fr;
        gap: 0.75rem;
    }
    .sections {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>