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

<main class={isPanelOpen ? "panel-open" : ""}>
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
</main>

<SidePanel
  isOpen={isPanelOpen}
  onClose={closePanel}
  class={isPanelOpen ? "panel-open" : ""}
>
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

  h1.panel-open {
    display: none;
  }

  table {
    width: 100%;
    border: none;
    font-size: medium;
  }

  SidePanel.panel-open {
    /* transform: translateX(0); */
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
