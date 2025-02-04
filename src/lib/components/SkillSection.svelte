<script lang="ts">
  import type { Tool } from "$lib/tools";

  export let category = "";
  export let tools: Tool[] = [];
  const iconSize = 16;
</script>

<div class="skill-section">
  <h3>{category}</h3>
  <div class="skill-section-content">
    {#each tools as tool}
      <div class="skill-element">
        <svelte:component this={tool.icon} alt={tool.name} size={iconSize} />
        {tool.name}
      </div>
    {/each}
  </div>
</div>
