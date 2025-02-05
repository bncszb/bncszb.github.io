<script lang="ts">
  import SidePanel from "$lib/components/SidePanel.svelte";
  import SkillDetails from "$lib/components/skill/SkillDetails.svelte";
  import history from "$lib/models/history";
  import { getSkillsByTier, type Skill } from "$lib/models/skills";
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

<main>
  <header>
    <h1>Skills</h1>

    <table>
      <tbody>
        {#each tiers as tier, i}
          <tr>
            <td>
              {#each tier as skill}
                <button on:click={() => openPanel(skill)}>
                  <svelte:component
                    this={skill.icon}
                    size={iconSizes[i % iconSizes.length]}
                  />
                </button>
              {/each}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </header>

  <SidePanel isOpen={isPanelOpen} onClose={closePanel}>
    {#if selectedSkill}
      <SkillDetails skill={selectedSkill} />
    {/if}
  </SidePanel>
</main>

<style>
  main {
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h1 {
    margin-bottom: 5px;
  }

  table {
    width: 100%;
    border: none;
    font-size: medium;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  button:hover {
    color: var(--color-text-hover);
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
</style>
