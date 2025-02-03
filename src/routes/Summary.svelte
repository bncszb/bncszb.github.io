<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
</script>

<AccordionItem isOpen={true}>
  <!-- Header Content -->
  <p slot="headerSlot" class="accordion-header.level-1">Summary</p>
  <!-- Body Content -->
  <p>
    Experienced IT professional with a deep understanding of biomedical data.
  </p>
</AccordionItem>
