<script lang="ts">
  import mermaid from "mermaid";
  import { onMount } from "svelte";

  type MermaidStore = {
    component: any;
  };
  mermaid.initialize({
    startOnLoad: false,
    gantt: { useWidth: 1200, useMaxWidth: false },
  });

  let mermaidChart = $state<MermaidStore>({
    component: null,
  });

  interface PieChartData {
    title: string;
    items: Record<string, number>;
  }

  let pieChartData: PieChartData = {
    title: "Pets adopted by volunteers",
    items: {
      Dogs: 386,
      Cats: 85,
      HoneyBadgers: 151,
      Rats: 10,
    },
  };

  const generatePieChart = (data: PieChartData): void => {
    mermaid.run();
    const diagram = `
%%{init: {"theme": "dark"}}%%
gantt
    dateFormat  YYYY-MM
    section Section
    A task           :a1, 2014-01, 2016-09
    Another task     :after a1  , 20d
    A task           :a23, 2014-01, 2015-09

    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d  
  `;
    console.log(diagram);

    mermaid.render(`pets-pie-chart`, diagram).then((component) => {
      console.log("Chart rendered");
      console.log(component);
      mermaidChart.component = component.svg;
    });
  };

  onMount(async () => {
    generatePieChart(pieChartData);
  });
</script>

<h1>Gantt Chart</h1>
<article>
  {#if mermaidChart.component}
    {@html mermaidChart.component}
  {:else}
    <p>Loading...</p>
  {/if}
</article>

<style>
  article {
    background-color: #222;
    padding: 10px;

    overflow-x: auto;
  }
  /* article :global(svg#graphDiv) {
    max-width: none !important;
  }
  article :global(text) {
    /* font-size: 26px !important;
    font-family: "Jetbrains Mono", monospace !important; 
  } */
</style>
