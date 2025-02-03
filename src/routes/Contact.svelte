<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
</script>

<AccordionItem>
  <!-- Header Slot -->
  <p slot="headerSlot" class="accordion-header.level-1">Contact Information</p>
  <!-- Body Content -->

  <ul>
    <li>Email: bszabo96@gmail.com</li>
    <li>Phone: +36 20 566 6348</li>
    <li>Location: Budapest, Hungary</li>
  </ul>
</AccordionItem>
