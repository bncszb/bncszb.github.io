<script lang="ts">
  import type { Project } from "$lib/models/projects";

  export let project: Project;
</script>

<div class="project-details">
  <h3>{project.name}</h3>

  <p>{project.description || project.shortDescription}</p>

  {#if project.bulletPoints && project.bulletPoints.length > 0}
    <ul>
      {#each project.bulletPoints as bp}
        <li>{bp}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .project-details {
    margin: 1em;
  }
</style>
