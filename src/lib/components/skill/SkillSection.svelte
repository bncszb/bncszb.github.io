<script lang="ts">
  import { getSkillKebab, type Skill } from "$lib/models/skills";

  export let category = "";
  export let skills: Skill[] = [];
  const iconSize = 25;
</script>

<main>
  <div class="skill-section">
    {#if category && skills.length > 0}
      <h2>{category}</h2>
      {#each skills as skill}
        <a href="/site/skills/{getSkillKebab(skill)}">
          <table>
            <tbody>
              <tr>
                <td><h4>{skill.name}</h4></td>
                <td> <svelte:component this={skill.icon} size={iconSize} /></td>
              </tr>
            </tbody>
          </table>
        </a>
      {/each}
    {/if}
  </div>
</main>

<style>
  main {
    width: 80%;
  }
  .skill-section {
    width: 100%;
    height: fit-content;
    border: 3px;
    justify-content: left;
  }

  table {
    margin-left: auto;
    margin-right: auto;
  }
  a {
    margin: auto;

  }

</style>
