<script>
  import SkillSection from "$lib/components/skill/SkillSectionCV.svelte";
  import { skillsByCategory } from "$lib/models/history";
  import { skillCategories } from "$lib/models/skills";
</script>

<div class="skills-container">
  <h3 class="skills-title">Technical Skills</h3>
  
  <div class="skills-content">
    {#each skillCategories as category}
      <SkillSection
        {category}
        skills={skillsByCategory[category].sort((a, b) => b.mastery - a.mastery)}
      />
    {/each}
  </div>
</div>

<style>
  .skills-container {
    width: 100%;
  }
  
  .skills-title {
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--color-theme-1);
    font-size: 1.2rem;
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 0.5rem;
  }
  
  .skills-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
