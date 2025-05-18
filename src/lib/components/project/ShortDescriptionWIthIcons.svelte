<script lang="ts">
  import { openPanel } from "$lib/components/side-panel/side-panel.svelte";
  import type { Project } from "$lib/models/projects";
  import ProjectDetails from "./ProjectDetails.svelte";

  export let project: Project;

  const iconSize = 24;
</script>

<button
  class="project-card"
  onclick={(e) => {
    e.stopPropagation();
    openPanel(ProjectDetails, { project });
  }}
  tabindex="0"
>
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

  <div class="view-details">
    <span class="view-text">View Details</span>
    <span class="arrow-icon">→</span>
  </div>
</button>

<style>
  .project-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    cursor: pointer;
    padding: 0.75rem;
    border-radius: 6px;
    transition: all var(--transition-speed, 0.3s) ease;
  }

  .project-card:hover,
  .project-card:focus {
    background-color: rgba(44, 122, 123, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 3px 6px var(--color-shadow, rgba(0, 0, 0, 0.1));
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

  .view-details {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: var(--color-theme-1, #2c7a7b);
    font-weight: 500;
    margin-top: 0.25rem;
    opacity: 0;
    transition: opacity var(--transition-speed, 0.3s) ease;
  }

  .project-card:hover .view-details,
  .project-card:focus .view-details {
    opacity: 1;
  }

  .arrow-icon {
    font-size: 1rem;
    transition: transform var(--transition-speed, 0.3s) ease;
  }

  .project-card:hover .arrow-icon,
  .project-card:focus .arrow-icon {
    transform: translateX(3px);
  }
</style>
