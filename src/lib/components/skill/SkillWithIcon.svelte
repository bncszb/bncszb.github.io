<script lang="ts">
  import { type Skill } from "$lib/models/skills";
  export let skill: Skill;
  export let iconSize = 40;
</script>

<table>
  <tbody>
    <tr>
      <td>{skill.name}</td>
      <td> <svelte:component this={skill.icon} size={iconSize} /></td>
    </tr>
  </tbody>
</table>

<style>
  table {
    margin-left: auto;
    margin-right: auto;
  }
</style>
