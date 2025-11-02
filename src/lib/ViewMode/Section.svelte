<script>
    import Link from "./Link.svelte";

    let {section = $bindable(), accent} = $props();
</script>

<div class="section {accent}">
    <div class="title">
        <strong>{section.title || ""}</strong>
    </div>
    <div class="desc">
        <em>{section.description || ""}</em>
    </div>
    <div class="items">
        {#each section.items || [] as item}
        <Link {item} />
        {/each}
    </div>
</div>

<style>
    .section {
        padding: 0.5rem;
        border: solid 1px var(--accent-color);
        border-radius: 0.25rem;
    }

    .desc {
        margin-bottom: 0.5rem;
        padding-bottom: 0.25rem;
        border-bottom: solid 1px var(--accent-color);
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>