<script lang="ts">
    import { onMount } from "svelte";
    import * as d3 from "d3";
  
    let container: SVGSVGElement;
  
    onMount(() => {
      const width = 400, height = 300;
  
      // Sample graph data
      const nodes = [
        { id: "A" },
        { id: "B" },
        { id: "C" }
      ];
      
      const links = [
        { source: "A", target: "B" },
        { source: "B", target: "C" },
        { source: "C", target: "A" }
      ];
  
      // Create SVG
      const svg = d3.select(container)
        .attr("width", width)
        .attr("height", height);
  
      // Create a force simulation
      const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2));
  
      // Draw links (edges)
      const link = svg.selectAll("line")
        .data(links)
        .enter()
        .append("line")
        .style("stroke", "#999")
        .style("stroke-width", 2);
  
      // Draw nodes (circles)
      const node = svg.selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r", 10)
        .attr("fill", (d, i) => d3.schemeCategory10[i]);
  
      // Node labels
      const labels = svg.selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .text(d => d.id)
        .attr("font-size", "12px")
        .attr("dx", 12)
        .attr("dy", 4);
  
      // Update positions on each tick
      simulation.on("tick", () => {
        link
          .attr("x1", d => d.source.x)
          .attr("y1", d => d.source.y)
          .attr("x2", d => d.target.x)
          .attr("y2", d => d.target.y);
  
        node
          .attr("cx", d => d.x)
          .attr("cy", d => d.y);
  
        labels
          .attr("x", d => d.x)
          .attr("y", d => d.y);
      });
    });
  </script>
  
  <svg bind:this={container}></svg>
  
  <style>
    svg {
      display: block;
      margin: auto;
      /* border: 1px solid #ccc; */
    }
  </style>