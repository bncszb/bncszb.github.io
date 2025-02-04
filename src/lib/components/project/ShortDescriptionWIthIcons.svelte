<script lang="ts">
  import type { Project } from "$lib/models/projects";

  export let project: Project;
</script>

<div class="short-description-with-icons">
  <table class="short-description-with-icons">
    <colgroup>
      <col style="width: 60%;" />
      <col style="width: 40%;" />
    </colgroup>
    <tbody class="short-description-with-icons">
      <tr>
        <td style="text-align: left;">
          {project.shortDescription}
        </td>
        <td class="icons">
          {#if project.tools && project.tools.length > 0}
            {#each project.tools as tool}
              <svelte:component this={tool.icon} />
            {/each}
          {/if}
        </td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  .short-description-with-icons {
    width: 100%;
    height: fit-content;
  }

  .short-description-with-icons col {
    width: auto;
  }
  td {
    vertical-align: middle;
    padding: 0px;
  }
  table {
    padding: 0px;
  }

  .icons {
    text-align: middle;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
  }
</style>
