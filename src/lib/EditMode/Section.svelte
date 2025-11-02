<script>
    import Item from "./Item.svelte";
    let {section = $bindable(), sections = $bindable(), idx} = $props();

    const emptyItem = {
        title: "Change with your title",
        description: "Add or blank out description",
        url: "./"
    }

    const moveSelf = (posChange) => {
        let changeArray = [...sections];
        const [sectionToMove] = changeArray.splice(idx, 1);
        changeArray.splice(idx + posChange, 0, sectionToMove);
        sections = [...changeArray];
    }
</script>

<div class="section">
    <div class="actions">
        <button disabled={idx > 0 ? false : true} onclick={() => moveSelf(-1)}>Move Up</button>
        <button disabled={idx < sections.length - 1 ? false : true} onclick={() => moveSelf(1)}>Move Down</button>
        <button onclick={() => {
            sections.splice(idx, 1)
        }}>Delete</button>
    </div>
    <div class="header">
        <div>Title: </div><input type="text" bind:value={section.title}>
        <div>Description: </div><input type="text" bind:value={section.description}>
        <div>Accent: </div><select bind:value={section.color}>
            <option value="">Auto</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="orange">Orange</option>
            <option value="purple">Purple</option>
            <option value="yellow">Yellow</option>
        </select>
    </div>
    <div class="items">
        {#each section.items || [] as item, idx}
        <Item {idx} bind:item={section.items[idx]} bind:items={section.items} />
        {/each}
        <button onclick={() => {
            section.items.push({...emptyItem})
        }}>Add Item</button>
    </div>
</div>

<style>
    button:disabled {
        filter: brightness(50%)
    }

    .section{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.25rem;
        border: solid 1px #ffffff;
    }

    .actions {
        display: flex;
        flex-direction: row;
        gap: 0.25rem;
    }

    .header {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 0.5rem;
    }

    .items {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>