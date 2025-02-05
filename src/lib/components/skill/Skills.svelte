<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
  import SkillSection from "$lib/components/skill/SkillSection.svelte";

  import { skillCategories, skillsByCategory } from "$lib/models/skills";
</script>

<AccordionItem isOpen={true}>
  <!-- Header Content-->
  <p slot="headerSlot" class="accordion-header.level-1">Skills</p>
  <!-- Body Content -->

  {#each skillCategories as category}
    <SkillSection {category} skills={skillsByCategory[category]} />
  {/each}
</AccordionItem>
