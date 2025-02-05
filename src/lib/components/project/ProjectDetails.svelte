<script lang="ts">
  import type { Project } from "$lib/models/projects";
  import Markdown from "../Markdown.svelte";

  export let project: Project;
</script>

<div class="project-details">
  <h3>{project.name}</h3>

  <Markdown source={project.description || project.shortDescription} />

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
