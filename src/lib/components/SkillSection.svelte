<script lang="ts">
  import type { Tool } from "$lib/tools";

  export let category = "";
  export let tools: Tool[] = [];
  const iconSize = 50;
</script>

<div class="skill-section">
  {#if category && tools.length > 0}
    <table class="skill-section">
      <colgroup>
        <col style="width: 20%;" />
        <col style="width: 30%;" />
        <col style="width: 60%;" />
      </colgroup>
      <tbody>
        <tr>
          <th>{category}</th>
          <td>
            {#each tools as tool}
              <p>{tool.name}</p>
            {/each}
          </td>
          <td>
            {#each tools as tool}
              <svelte:component
                this={tool.icon}
                alt={tool.name}
                size={iconSize}
              />
            {/each}
          </td>
        </tr>
      </tbody>
    </table>
  {/if}
</div>

<style>
  .skill-section {
    width: 100%;
    height: fit-content;
    border: 3px;
  }

  .skill-section col {
    width: auto;
  }

  th {
    padding: 8px;
    text-align: center;
    vertical-align: top;
  }
  td {
    /* border: 1px solid black; */
    padding: 8px;
  }

  td:nth-child(3) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
  }
</style>
