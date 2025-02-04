<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
  import SkillSection from "$lib/components/SkillSection.svelte";

  import { toolCategories, toolsByCategory } from "$lib/models/tools";
</script>

<AccordionItem isOpen={true}>
  <!-- Header Content-->
  <p slot="headerSlot" class="accordion-header.level-1">Skills</p>
  <!-- Body Content -->

  {#each toolCategories as category}
    <SkillSection {category} tools={toolsByCategory[category]} />
  {/each}
</AccordionItem>
