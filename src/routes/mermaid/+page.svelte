<script lang="ts">
  import mermaid from "mermaid";
  import { onMount } from "svelte";

  type MermaidStore = {
    component: any;
  };
  mermaid.initialize({
    startOnLoad: false,
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
%%{init: {'theme':'base'}}%%
pie title ${data.title}
  ${Object.entries(data.items)
    .map(([key, value]) => `"${key}": ${value}`)
    .join("\n")}
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

<article>
  <h1>Pie Chart Example</h1>
  {#if mermaidChart.component}
    {@html mermaidChart.component}
  {:else}
    <p>Loading...</p>
  {/if}
</article>

<style>
  /* article :global(svg) {
    background-color: #222; 
    border-radius: 10px;
    padding: 10px;
  } */

  article :global(text) {
    font-size: 26px !important;
    font-family: "Jetbrains Mono", monospace !important;
  }


</style>
