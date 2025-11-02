<script>
    let {item = $bindable(), items = $bindable(), idx} = $props();

    const moveSelf = (posChange) => {
        let changeArray = [...items];
        const [itemToMove] = changeArray.splice(idx, 1);
        changeArray.splice(idx + posChange, 0, itemToMove);
        items = [...changeArray]
    }
</script>

<div class="item">
    <div class="actions">
        <button disabled={idx > 0 ? false : true} onclick={() => moveSelf(-1)}>Move Up</button>
        <button disabled={idx < items.length - 1 ? false : true} onclick={() => moveSelf(1)}>Move Down</button>
        <button onclick={() => items.splice(idx, 1)}>Delete</button>
    </div>
    <div class="macros">
        <div>Title: </div><input type="text" bind:value={item.title}>
        <div>Description: </div><input type="text" bind:value={item.description}>
        <div>URL: </div><input type="text" bind:value={item.url}>
        <div>Icon: icons/ </div><input type="text" bind:value={item.icon}>
    </div>
</div>

<style>
    .actions {
        display: flex;
        flex-direction: row;
        gap: 0.25rem;
    }
    .macros {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 0.5rem;
    }

    button {
        font-size: 12pt;
    }

    button:disabled {
        filter: brightness(50%);
    }
</style>