<script>
  import ViewMode from "./lib/ViewMode/ViewMode.svelte";
  import EditMode from "./lib/EditMode/EditMode.svelte";
  import Code from "./lib/Code/Code.svelte";

  let appState = $state(0);
  let jsonData = $state({title: "Placeholder for title", subtitle: "", sections: []});

  const toggleState = (newState) => {
    if (appState === newState) {
      appState = 0;
    } else {
      appState = newState;
    }
  }

  const refreshData = async () => {
    const res = await fetch('data/dashboard.json');
    jsonData = await res.json();
  };

  refreshData();

  $effect(() => {
    const new_title = jsonData.title;
    document.title = new_title;
  })
</script>

<div class="actions">
  <button onclick={refreshData}>Refresh</button>
  <button onclick={() => {
    toggleState(1)
  }}>{appState === 1 ? "View" : "Edit"}</button>
  <button onclick={() => {
    toggleState(2)
  }}>View {appState === 2 ? "Dash" : "Code"}</button>
</div>

<div class="main-app">
{#if appState === 0}
<ViewMode {jsonData} />
{:else if appState === 1}
<EditMode bind:jsonData={jsonData} />
{:else if appState === 2}
<Code {jsonData} />
{/if}
</div>

<div class="attrib">
  <p><a href="https://www.dilangilluly.us/projects/bldash" target="_blank">BuildLess Dash</a> by <a href="https://www.dilangilluly.us" target="_blank">Dilan Gilluly</a></p>
</div>

<style>
  .actions {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
  }

  .main-app {
    margin-bottom: 20vh;
  }

  .attrib {
    background-color: #000000;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 100;
  }
</style>