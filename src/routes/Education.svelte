<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
  import HistoryElement from "$lib/components/HistoryElement.svelte";
</script>

<h2>Education</h2>

<!-- Doctor of Medicine -->
<AccordionItem useStyle={false}>
  <HistoryElement
    title="Doctor of Medicine"
    location="Semmelweis University, Budapest"
    time="2014 - 2021"
    slot="headerSlot"
  />
  <p>Juhu</p>
</AccordionItem>

<!-- Physics B.Sc. -->
<AccordionItem useStyle={false}>
  <HistoryElement
    title="Physics B.Sc."
    location="Eötvös Loránd University, Budapest"
    time="2011 - 2014"
    slot="headerSlot"
  />
  <p>Juhu</p>
</AccordionItem>
