<script lang="ts">
  import { openPanel } from "$lib/components/side-panel/side-panel.svelte";
  import { type Skill } from "$lib/models/skills";
  import { stopPropagation } from "svelte/legacy";
  import SkillDetails from "./SkillDetails.svelte";

  export let category = "";
  export let skills: Skill[] = [];
  const iconSize = 24;

  function showSkill(skill: Skill) {
    return () => {
      openPanel(SkillDetails, { skill });
    };
  }
</script>

<div class="skill-category">
  {#if category && skills.length > 0}
    <h4 class="category-title">{category}</h4>
    <div class="skill-list">
      {#each skills as skill}
        <button 
          class="skill-button" 
          onclick={stopPropagation(showSkill(skill))}
          title={skill.name}
        >
          {#if skill.icon}
            <span class="skill-icon">
              <svelte:component
                this={skill.icon}
                alt={skill.name}
                size={iconSize}
              />
            </span>
          {/if}
          <span class="skill-name">{skill.name}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .skill-category {
    margin-bottom: 1rem;
  }
  
  .category-title {
    font-size: 1rem;
    color: var(--color-theme-1);
    margin: 0 0 0.5rem 0;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid var(--color-border);
  }
  
  .skill-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .skill-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    background-color: rgba(44, 122, 123, 0.1);
    border-radius: 4px;
    font-size: 0.85rem;
    color: var(--color-text);
    transition: all var(--transition-speed) ease;
    cursor: pointer;
  }
  
  .skill-button:hover {
    background-color: rgba(44, 122, 123, 0.2);
    transform: translateY(-2px);
  }
  
  .skill-icon {
    display: flex;
    align-items: center;
    color: var(--color-theme-1);
  }
  
  .skill-name {
    font-weight: 500;
  }
</style>
