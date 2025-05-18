<script lang="ts">
  import { getRoleSkills, type Role } from "$lib/models/roles/common-roles";
  import Markdown from "../Markdown.svelte";

  export let role: Role;
  
  // Format the date in a more readable format
  const startDate = role.startDate.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
  });
  
  const endDate = role.endDate
    ? role.endDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
      })
    : "Present";
    
  const dateRange = `${startDate} - ${endDate}`;
</script>

<div class="role-details">
  <div class="role-header">
    <div class="role-title-container">
      <h3 class="role-title">{role.name}</h3>
      <div class="role-meta">
        <span class="role-location">📍 {role.instutition}, {role.location}</span>
        <span class="role-date">🗓️ {dateRange}</span>
      </div>
    </div>
  </div>
  
  <div class="role-content">
    {#if role.description}
      <div class="role-description">
        <Markdown source={role.description} />
      </div>
    {/if}

    {#if role.bulletPoints && role.bulletPoints.length > 0}
      <div class="role-highlights">
        <h4>Key Responsibilities</h4>
        <ul class="bullet-list">
          {#each role.bulletPoints as bp}
            <li>{bp}</li>
          {/each}
        </ul>
      </div>
    {/if}
    
    {#if getRoleSkills(role).length > 0}
      <div class="role-skills">
        <h4>Skills Used</h4>
        <div class="skills-list">
          {#each getRoleSkills(role) as skill}
            <span class="skill-tag">{skill.name}</span>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>

<style>
  .role-details {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--color-shadow, rgba(0, 0, 0, 0.1));
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .role-header {
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;
    border-bottom: 1px solid var(--color-border, #e2e8f0);
  }
  
  .role-title {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    color: var(--color-theme-1, #2c7a7b);
    font-weight: 600;
  }
  
  .role-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    font-size: 0.9rem;
    color: var(--color-text-light, #4a5568);
  }
  
  .role-content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  
  .role-description :global(p) {
    margin-bottom: 1rem;
    line-height: 1.6;
    color: var(--color-text, #2d3748);
  }
  
  .role-description :global(p:last-child) {
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
  
  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .skill-tag {
    display: inline-block;
    background-color: rgba(44, 122, 123, 0.1);
    color: var(--color-theme-1, #2c7a7b);
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }
</style>
