<script lang="ts">
  import "$lib/components/SidePanel.svelte";
  import SkillDetails from "$lib/components/skill/SkillDetails.svelte";
  import history from "$lib/models/history";
  import { getSkillsByTier, type Skill } from "$lib/models/skills";
  import { openPanel } from "$lib/stores/panelStore.svelte";

  const ratios = [2, 3, 4];
  const fontSizes = [30, 25, 20];

  const skills = history.getSkills();
  const tiers = ratios.map((_, i) => getSkillsByTier(skills, i, ratios));

  async function showSkill(skill: Skill) {
    console.log("showSkill", skill);
    openPanel(SkillDetails, { skill });
  }
</script>

<svelte:head>
  <title>Bence Szabó</title>
  <meta name="description" content="Bence Szabó's CV" />
</svelte:head>

<main>
  <!-- <main class={isPanelOpen ? "panel-open" : ""}> -->
  <h1>Skills</h1>
  <div class="icon-or-text">
    <a href="/site/skills">Icons</a>
    <a href="/site/skills/text" style="text-decoration: underline;">Text</a>
  </div>

  <table class="tier">
    <tbody class="tier">
      {#each tiers as tier, i}
        <tr>
          <td>
            {#each tier as skill}
              <button onclick={() => showSkill(skill)}>
                <div class="skill" style="font-size: {fontSizes[i]}px;">
                  {skill.name}
                </div>
              </button>
            {/each}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>

<!-- <side-panel-component isOpen={isPanelOpen} onclose={closePanel}>
  {#if selectedSkill}
    <SkillDetails skill={selectedSkill} />
  {/if}
</side-panel-component> -->

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
    border: none;
    font-size: medium;
  }
  tbody {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .tier {
    justify-content: center;
    margin: auto;
    text-align: center;
    flex-wrap: wrap;
    display: flex;
    gap: 12px;
    width: min(400px, 100%);
  }
  .icon-or-text {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    font-size: large;
  }

  .skill {
    padding: 10px;
  }
</style>
