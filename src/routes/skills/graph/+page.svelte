<script lang="ts">
  import Graph from "$lib/components/graph/Graph.svelte";
  import history from "$lib/models/history";
</script>

<main>
  <h1>Skills</h1>
  <div class="icon-or-text">
    <a href="/skills">Icons</a>
    <a href="/skills/text">Text</a>
    <a href="/skills/graph" style="text-decoration: underline;">Graph</a>
  </div>
  <Graph graph={history.getStackGraph()} />
</main>

<style>
  main {
    margin: 0 auto;
    padding: 20px;
  }
  h1 {
    margin-bottom: 5px;
  }

  .icon-or-text {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    font-size: large;
  }
</style>
