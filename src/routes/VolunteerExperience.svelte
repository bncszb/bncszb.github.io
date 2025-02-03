<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
  import HistoryElement from "$lib/components/HistoryElement.svelte";
</script>

<AccordionItem>
  <p slot="headerSlot" class="accordion-header.level-1">Volunteer Experience</p>

  <HistoryElement
    title="Disaster and Humanitarian Relief"
    location="Hungarian Charity Service of the Order of Malta"
    time="2019 - ongoing"
  />

  <ul>
    <li>COVID19 - Testing and vaccination</li>
    <li>
      Flash floods and storms - psychosocial crisis intervention and logistics
    </li>
    <li>Medical screening of Transylvanian population</li>
  </ul></AccordionItem
>
