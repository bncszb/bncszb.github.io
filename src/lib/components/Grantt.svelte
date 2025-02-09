<script lang="ts">
  import type { Role } from "$lib/models/roles/common-roles";
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

  type Props = {
    roles: Role[];
  };

  let { roles }: Props = $props();

  function generateGranttBar(role: Role, i: number): string {
    const startDate = role.startDate.toISOString().slice(0, 7);
    const endDate = (role.endDate || new Date()).toISOString().slice(0, 7);
    return `${role.name} :a${i}, ${startDate}, ${endDate}`;
  }

  const generateGranttChart = (roles: Role[]): void => {
    mermaid.run();
    const diagram = `
%%{init: {"theme": "dark"}}%%
gantt
title A Gantt Diagram
section Roles
dateformat YYYY-MM
    ${roles.map((role, i) => generateGranttBar(role, i)).join("\n")}
    `;
    console.log(diagram);

    mermaid.render(`grantt-chart`, diagram).then((component) => {
      console.log("Chart rendered");
      console.log(component);
      mermaidChart.component = component.svg;
    });
  };

  onMount(async () => {
    generateGranttChart(roles);
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
