<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
</script>

<AccordionItem isOpen={true}>
  <!-- Header Content-->
  <p slot="headerSlot" class="accordion-header.level-1">Skills</p>
  <!-- Body Content -->

  <ul>
    <li>HTML5, CSS3, JavaScript</li>
    <li>React, Vue.js, Svelte</li>
    <li>Node.js, Express</li>
    <li>Git, GitHub</li>
    <li>Responsive Web Design</li>
    <li>UI/UX Principles</li>
  </ul>
</AccordionItem>
