<script lang="ts">
  import type { Project } from "$lib/models/projects";

  export let project: Project;
  
  // Set a consistent icon size
  const iconSize = 24;
</script>

<div class="project-card">
  <div class="project-description">
    <p>{project.shortDescription}</p>
  </div>
  
  {#if project.skills && project.skills.length > 0}
    <div class="project-skills">
      {#each project.skills as skill}
        {#if skill.icon}
          <div class="skill-icon" title={skill.name}>
            <svelte:component this={skill.icon} size={iconSize} />
          </div>
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  .project-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .project-description {
    flex: 1;
  }
  
  .project-description p {
    margin: 0;
    line-height: 1.5;
    color: var(--color-text, #2d3748);
    font-size: 0.95rem;
  }
  
  .project-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: flex-start;
    align-items: center;
    padding-top: 0.5rem;
    border-top: 1px solid var(--color-border, #e2e8f0);
  }
  
  .skill-icon {
    color: var(--color-theme-1, #2c7a7b);
    opacity: 0.8;
    transition: all var(--transition-speed, 0.3s) ease;
  }
  
  .skill-icon:hover {
    opacity: 1;
    transform: scale(1.1);
  }
</style>
