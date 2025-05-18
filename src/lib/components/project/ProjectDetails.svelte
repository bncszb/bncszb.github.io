<script lang="ts">
  import type { Project } from "$lib/models/projects";
  import Markdown from "../Markdown.svelte";

  export let project: Project;
  
  // Set a consistent icon size
  const iconSize = 24;
</script>

<div class="project-details">
  <div class="project-header">
    <h3 class="project-title">{project.name}</h3>
    
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
  
  <div class="project-content">
    <div class="project-description">
      <Markdown source={project.description || project.shortDescription} />
    </div>

    {#if project.bulletPoints && project.bulletPoints.length > 0}
      <div class="project-highlights">
        <h4>Key Achievements</h4>
        <ul class="bullet-list">
          {#each project.bulletPoints as bp}
            <li>{bp}</li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>

<style>
  .project-details {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--color-shadow, rgba(0, 0, 0, 0.1));
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--color-border, #e2e8f0);
  }
  
  .project-title {
    margin: 0;
    font-size: 1.25rem;
    color: var(--color-theme-1, #2c7a7b);
    font-weight: 600;
  }
  
  .project-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: flex-end;
    align-items: center;
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
  
  .project-content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  
  .project-description :global(p) {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: var(--color-text, #2d3748);
  }
  
  .project-description :global(p:last-child) {
    margin-bottom: 0;
  }
  
  h4 {
    font-size: 1.1rem;
    color: var(--color-theme-1, #2c7a7b);
    margin: 0 0 0.75rem 0;
    font-weight: 600;
  }
  
  .bullet-list {
    padding-left: 1.5rem;
    margin: 0;
  }
  
  .bullet-list li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
  
  .bullet-list li:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 600px) {
    .project-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;
    }
    
    .project-skills {
      justify-content: flex-start;
    }
  }
</style>
