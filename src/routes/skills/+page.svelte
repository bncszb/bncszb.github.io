<script lang="ts">
  import { openPanel } from "$lib/components/side-panel/side-panel.svelte";
  import "$lib/components/side-panel/SidePanel.svelte";
  import SkillDetails from "$lib/components/skill/SkillDetails.svelte";
  import history from "$lib/models/history";
  import { getSkillsByTier, type Skill } from "$lib/models/skills";

  const ratios = [2, 3, 4];
  const iconSizes = [100, 80, 60];

  const skills = history.getSkills().filter((skill) => skill.icon);
  const tiers = ratios.map((_, i) => getSkillsByTier(skills, i, ratios));

  function showSkill(skill: Skill) {
    return () => {
      openPanel(SkillDetails, { skill });
    };
  }
  
  // Get the current view mode
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const isIconView = !currentPath.includes('/text') && !currentPath.includes('/graph');
  const isTextView = currentPath.includes('/text');
  const isGraphView = currentPath.includes('/graph');
</script>

<svelte:head>
  <title>Bence Szabó MD | Technical Skills</title>
  <meta name="description" content="Overview of Bence Szabó's technical skills and expertise in programming, frameworks, databases, and medical ontologies." />
</svelte:head>

<main>
  <div class="skills-header">
    <h1>Technical Skills</h1>
    <p class="skills-description">
      An overview of my technical expertise across various domains, from programming languages to medical ontologies.
    </p>
  </div>
  
  <div class="view-options">
    <a href="/site/skills" class={isIconView ? 'active' : ''}>
      <span class="view-icon">⊞</span>
      <span class="view-label">Icon View</span>
    </a>
    <a href="/site/skills/text" class={isTextView ? 'active' : ''}>
      <span class="view-icon">≡</span>
      <span class="view-label">Text View</span>
    </a>
    <a href="/site/skills/graph" class={isGraphView ? 'active' : ''}>
      <span class="view-icon">⋈</span>
      <span class="view-label">Graph View</span>
    </a>
  </div>
  
  <div class="skills-container">
    {#each tiers as tier, i}
      <div class="skill-tier tier-{i+1}">
        <h2 class="tier-title">Tier {i+1}</h2>
        <div class="skill-icons">
          {#each tier as skill}
            <button 
              class="skill-icon-button" 
              onclick={showSkill(skill)}
              title={skill.name}
            >
              <div class="skill-icon">
                <svelte:component
                  this={skill.icon}
                  size={iconSizes[i % iconSizes.length]}
                />
              </div>
              <span class="skill-name">{skill.name}</span>
            </button>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</main>

<style>
  main {
    margin: 0 auto;
    padding: 0 1rem;
    max-width: 1200px;
  }

  .skills-header {
    text-align: center;
    margin: 2rem 0;
  }
  
  .skills-header h1 {
    margin-bottom: 0.5rem;
    color: var(--color-theme-1);
  }
  
  .skills-description {
    color: var(--color-text-light);
    max-width: 600px;
    margin: 0 auto;
  }

  .view-options {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
    background-color: white;
    padding: 0.75rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--color-shadow);
  }
  
  .view-options a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    color: var(--color-text);
    text-decoration: none;
    transition: all var(--transition-speed) ease;
  }
  
  .view-options a:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .view-options a.active {
    background-color: var(--color-theme-1);
    color: white;
  }
  
  .view-icon {
    font-size: 1.2rem;
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
  }
  
  .skill-tier {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--color-shadow);
    padding: 1.5rem;
  }
  
  .tier-title {
    margin-top: 0;
    margin-bottom: 1.5rem;
    color: var(--color-theme-1);
    font-size: 1.5rem;
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 0.5rem;
  }
  
  .skill-icons {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  
  .skill-icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    border-radius: 8px;
    transition: all var(--transition-speed) ease;
    background-color: transparent;
    cursor: pointer;
  }
  
  .skill-icon-button:hover {
    transform: translateY(-5px);
    background-color: rgba(0, 0, 0, 0.02);
  }
  
  .skill-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-theme-1);
  }
  
  .skill-name {
    font-size: 0.9rem;
    color: var(--color-text);
    text-align: center;
  }
  
  @media (max-width: 768px) {
    .view-label {
      display: none;
    }
    
    .view-options a {
      padding: 0.5rem;
    }
    
    .skill-icons {
      gap: 1rem;
    }
  }
</style>
