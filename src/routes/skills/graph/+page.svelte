<script lang="ts">
  import history from "$lib/models/history";
  import * as d3 from "d3";
  import { onMount } from "svelte";

  const color = "rgba(0, 0, 0, 0.7)";
  const color2 = "rgba(0, 0, 0, 0.4)";
  let container: SVGSVGElement;

  onMount(() => {
    const width = 600,
      height = 500;

    const graph = history.getStackGraph();
    const nodes = graph.nodes;
    const links = graph.edges;

    const svg = d3
      .select(container)
      .attr("width", width)
      .attr("height", height);

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(50)
          .strength((d) => d.weight)
      )
      .force("charge", d3.forceManyBody().strength(-1000))
      .force("center", d3.forceCenter(width / 2, height / 2));

    nodes.forEach((node) => {
      if (node.id === "Python") {
        node.fx = width / 3; // Fixed X position
        node.fy = height / 2; // Fixed Y position
      }
      if (node.id === "Typescript") {
        node.fx = (2 * width) / 3; // Fixed X position
        node.fy = height / 2; // Fixed Y position
      }
    });
    // Draw links (edges)
    const link = svg
      .selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .style("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", (d) => d.weight);

    // Draw nodes (circles)
    const node = svg
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 10)
      .attr("fill", color2)
      .attr("stroke", "#fff");

    // Node labels
    const labels = svg
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text((d) => d.id)
      .attr("font-size", "12px")
      .attr("fill", "black")
      .attr("dx", 12)
      .attr("dy", 4);

    // Update positions on each tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      labels.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });
  });
</script>

<main>
  <h1>Skills</h1>
  <div class="icon-or-text">
    <a href="/site/skills">Icons</a>
    <a href="/site/skills/text">Text</a>
    <a href="/site/skills/graph" style="text-decoration: underline;">Graph</a>
  </div>
  <svg bind:this={container}></svg>
</main>

<style>
  main {
    margin: 0 auto;
    padding: 20px;
  }
  h1 {
    margin-bottom: 5px;
  }
  svg {
    display: block;
    margin: auto;
    max-width: 100%;

    /* border: 1px solid #ccc; */
  }
  .icon-or-text {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    font-size: large;
  }
</style>
