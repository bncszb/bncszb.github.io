<script lang="ts">
  import type { Graph } from "$lib/models/graph";
  import { getSkillKebab } from "$lib/models/skills";

  type Props = {
    graph: Graph;
  };

  let { graph }: Props = $props();

  import * as d3 from "d3";
  import { onMount } from "svelte";

  const color1 = "rgba(0, 0, 0, 0.7)";
  const color2 = "rgba(0, 0, 0, 0.4)";

  let container: SVGSVGElement;

  onMount(() => {
    const width = 600,
      height = 500;

    const nodes = graph.nodes;
    const links = graph.edges;

    for (const node of nodes) {
      if (node.fx) node.fx = width * node.fx;
      if (node.fy) node.fy = height * node.fy;
    }

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
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .on("mouseover", function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 15) // Increase size
          .attr("fill", color1) // Change color
          .attr("stroke-width", 4); // Thicker border
      })
      .on("mouseout", function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", 10) // Reset size
          .attr("fill", color2) // Reset color
          .attr("stroke-width", 2); // Reset border
      });
    svg.selectAll("circle").on("click", (_, d) => {
      window.location.href = `/site/skills/${getSkillKebab(d.id)}`;
    });

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

<svg bind:this={container}></svg>

<style>
  svg {
    display: block;
    margin: auto;
    max-width: 100%;
  }
</style>
