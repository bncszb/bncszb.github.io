<script lang="ts">
  import history from "$lib/models/history";
  import { getSkillsByTier } from "$lib/models/skills";

  const ratios = [2, 3, 4];
  const iconSizes = [100, 80, 60];

  const skills = history.getSkills().filter((skill) => skill.icon);
  const tiers = ratios.map((_, i) => getSkillsByTier(skills, i, ratios));
</script>

<svelte:head>
  <title>Bence Szabó</title>
  <meta name="description" content="John Doe's CV" />
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
                <svelte:component
                  this={skill.icon}
                  size={iconSizes[i % iconSizes.length]}
                />
              {/each}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </header>
</main>

<style>
  main {
    /* max-width: 800px; */
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  h1 {
    margin-bottom: 5px;
  }

  table {
    width: 100%;
    height: fit-content;
    border: 3px;
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
</style>
