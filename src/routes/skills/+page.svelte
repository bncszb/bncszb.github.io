<script lang="ts">
  console.log("src/routes/skills/%2Bpage.svelte");
  import "$lib/components/SidePanel.svelte";
  import SkillDetails from "$lib/components/skill/SkillDetails.svelte";
  import history from "$lib/models/history";
  import { getSkillsByTier, type Skill } from "$lib/models/skills";
  import { openPanel } from "$lib/stores/panelStore.svelte";

  const ratios = [2, 3, 4];
  const iconSizes = [100, 80, 60];

  const skills = history.getSkills().filter((skill) => skill.icon);
  const tiers = ratios.map((_, i) => getSkillsByTier(skills, i, ratios));

  async function showSkill(skill: Skill) {
    openPanel(SkillDetails, { skill });
  }
</script>

<svelte:head>
  <title>Bence Szabó</title>
  <meta name="description" content="Bence Szabó's CV" />
</svelte:head>

<main>
  <h1>Skills</h1>
  <div class="icon-or-text">
    <a href="/site/skills" style="text-decoration: underline;">Icons</a>
    <a href="/site/skills/text">Text</a>
  </div>
  <table>
    <tbody>
      {#each tiers as tier, i}
        <tr>
          <td>
            {#each tier as skill}
              <button onclick={() => showSkill(skill)}>
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

<style>
  main {
    margin: 0 auto;
    padding: 20px;
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
