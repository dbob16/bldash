<script>
    let {jsonData = $bindable()} = $props();

    const copyToClipboard = () => {
        const codeWindow = document.getElementById("code_window");
        navigator.clipboard.writeText(codeWindow.innerText)
    }
</script>

<h1>View Code</h1>

<div class="code-view">
<div class="code-header">
    <div>
        <p>The configuration of what you have currently in the window is shown below. You can copy it to your clipboard using the button.</p>
        <p>You can then paste it into your server's <em>data/dashboard.json file</em> to make it permanent</p>
    </div>
    <div><button onclick={copyToClipboard}>Copy Code</button></div>
</div>
<pre id="code_window">
{JSON.stringify(jsonData, null, 2)}
</pre>
</div>

<style>
    pre {
        display: block;
        box-sizing: border-box;
        max-width: 100%;
        max-height: 80vh;
        overflow: auto;
        padding: 0.5rem;
        border: solid 1px #ffffff;
        border-radius: 0.25rem;
    }
</style>