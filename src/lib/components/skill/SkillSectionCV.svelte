<script lang="ts">
  import { type Skill } from "$lib/models/skills";
  import { openPanel } from "$lib/stores/panelStore.svelte";
  import { stopPropagation } from "svelte/legacy";
  import SkillDetails from "./SkillDetails.svelte";

  export let category = "";
  export let skills: Skill[] = [];
  const iconSize = 50;

  function showSkill(skill: Skill) {
    return () => {
      openPanel(SkillDetails, { skill });
    };
  }
</script>

<div class="skill-section">
  {#if category && skills.length > 0}
    <table class="skill-section">
      <colgroup>
        <col class="col1" />
        <col class="col2" />
        <col class="col3" />
      </colgroup>
      <tbody>
        <tr>
          <th>{category}</th>
          <td>
            {#each skills as skill}
              <p>
                <button onclick={stopPropagation(showSkill(skill))}>
                  {skill.name}</button
                >
              </p>
            {/each}
          </td>
          <td class="hide-on-mobile">
            {#each skills as skill}
              <button onclick={stopPropagation(showSkill(skill))}>
                <svelte:component
                  this={skill.icon}
                  alt={skill.name}
                  size={iconSize}
                />
              </button>
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

  /* .skill-section col {
    width: auto;
  } */

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

  .col1 {
    width: max(20%, 200px);
  }

  .col2 {
    width: 30%;
  }

  .col3 {
    width: 50%;
  }

  @media (max-width: 600px) {
    .hide-on-mobile {
      display: none;
    }
    .col1 {
      width: 50%;
    }
    .col2 {
      width: 50%;
    }

    th {
      padding: 4px;
    }

    td {
      padding: 4px;
    }
  }
</style>
