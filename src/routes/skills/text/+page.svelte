<script lang="ts">
  import SidePanel from "$lib/components/SidePanel.svelte";
  import SkillDetails from "$lib/components/skill/SkillDetails.svelte";
  import Skills from "$lib/components/skill/Skills.svelte";
  import SkillSection from "$lib/components/skill/SkillSectionCV.svelte";
  import history, { skillsByCategory } from "$lib/models/history";
  import { getSkillsByTier, skillCategories, type Skill } from "$lib/models/skills";
  import { tick } from "svelte";

  const ratios = [2, 3, 4];
  const iconSizes = [100, 80, 60];

  const skills = history.getSkills().filter((skill) => skill.icon);
  const tiers = ratios.map((_, i) => getSkillsByTier(skills, i, ratios));

  let isPanelOpen = false;
  let selectedSkill: Skill | null = null;

  async function openPanel(skill: Skill) {
    selectedSkill = skill;
    await tick();
    isPanelOpen = true;
  }

  function closePanel() {
    isPanelOpen = false;
    selectedSkill = null;
  }
</script>

<svelte:head>
  <title>Bence Szabó</title>
  <meta name="description" content="Bence Szabó's CV" />
</svelte:head>

<main class={isPanelOpen ? "panel-open" : ""}>
  <h1>Skills</h1>
  <div class="icon-or-text">
    <a href="/site/skills">Icons</a>
    <a href="/site/skills/text" style="text-decoration: underline;">Text</a>
  </div>

  {#each skillCategories as category}
  <SkillSection
    {category}
    skills={skillsByCategory[category].sort((a, b) => b.mastery - a.mastery)}
  />
{/each}

</main>

<SidePanel isOpen={isPanelOpen} onClose={closePanel}>
  {#if selectedSkill}
    <SkillDetails skill={selectedSkill} />
  {/if}
</SidePanel>

<style>
  main {
    margin: 0 auto;
    padding: 20px;
  }

  main.panel-open table,
  main.panel-open h1 {
    filter: blur(2px);
  }

  h1 {
    margin-bottom: 5px;
  }

  table {
    width: 100%;
    border: none;
    font-size: medium;
  }

  tr,
  td {
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    display: flex;
    gap: 12px;
    width: 300px;
    margin: 10px;
  }
  .icon-or-text {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    font-size: large;
  }
</style>
