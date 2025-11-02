<script>
    import Section from "./Section.svelte";

    let {jsonData = $bindable()} = $props();

    const cycleColors = (num) => {
      const colorSet = ["red", "blue", "orange", "purple", "yellow"];
      const selectNum = num % colorSet.length;
      return colorSet[selectNum];
    }
</script>

<div class="header">
  <div class="title">
    <h1>{jsonData.title || ""}</h1>
  </div>
  {#if jsonData.subtitle}
  <div class="subtitle">
    <em>{jsonData.subtitle}</em>
  </div>
  {/if}
  <div class="sections">
    {#each jsonData.sections || [] as section, idx}
    <Section {section} accent={section.color || cycleColors(idx)}/>
    {/each}
  </div>
</div>

<style>
  .sections {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 0.5rem;
  }
</style>