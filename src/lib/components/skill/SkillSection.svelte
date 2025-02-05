<script lang="ts">
  import { getSkillKebab, type Skill } from "$lib/models/skills";

  export let category = "";
  export let skills: Skill[] = [];
  const iconSize = 50;
</script>

<div class="skill-section">
  {#if category && skills.length > 0}
    <table class="skill-section">
      <colgroup>
        <col style="width: 20%;" />
        <col style="width: 30%;" />
        <col style="width: 60%;" />
      </colgroup>
      <tbody>
        <tr>
          <th>{category}</th>
          <td>
            {#each skills as skill}
              <p>
                <a href="/site/skills/{getSkillKebab(skill)}">{skill.name}</a>
              </p>
            {/each}
          </td>
          <td>
            {#each skills as skill}
              <a href="/site/skills/{getSkillKebab(skill)}">
                <svelte:component
                  this={skill.icon}
                  alt={skill.name}
                  size={iconSize}
                />
              </a>
            {/each}
          </td>
        </tr>
      </tbody>
    </table>
  {/if}
</div>

<style>
  .skill-section {
    width: 100%;
    height: fit-content;
    border: 3px;
  }

  .skill-section col {
    width: auto;
  }

  th {
    padding: 8px;
    text-align: center;
    vertical-align: top;
  }
  td {
    /* border: 1px solid black; */
    padding: 8px;
  }

  td:nth-child(3) {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
  }
</style>
