<script>
    let {item = $bindable()} = $props();
</script>

<a href={item.url || ""} class="item" target="_blank">
    {#if item.icon}
    <div class="icon">
        <img src="data/icons/{item.icon}" alt={item.title}>
    </div>
    {/if}
    <div class="text">
        <div class="item-title">
            <strong>{item.title || ""}</strong>
        </div>
        <div class="item-desc">
            <em>{item.description || ""}</em>
        </div>
    </div>
</a>

<style>
    a.item {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
        align-items: center;
        padding: 0.25rem;
        text-decoration: none;
        transition: ease all 0.75s;
    }

    a.item:hover {
        box-shadow: 0 0 8px var(--accent-color);
        text-shadow: 0 0 8px var(--accent-color);
    }

    .icon {
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        width: 82px;
        height: 82px;
    }

    .icon img {
        display: block;
        box-sizing: border-box;
        max-width: 100%;
        max-height: 100%;
        overflow: auto;
    }
</style>