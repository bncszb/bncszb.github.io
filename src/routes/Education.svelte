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
  <ul>
    <li>Biochemistry competition: 5th place (2015)</li>
    <li>Biophysics competition: 6th place (2015)</li>
    <li>Research in LinkGroup</li>
    <li>Thesis:</li>
  </ul></AccordionItem
>

<!-- Physics B.Sc. -->
<AccordionItem useStyle={false}>
  <HistoryElement
    title="Physics B.Sc."
    location="Eötvös Loránd University, Budapest"
    time="2016 - 2020"
    slot="headerSlot"
  />
  <ul>
    <li>Biophysics Specialization</li>
    <li>Thesis:</li>
  </ul>
</AccordionItem>

<!-- <AccordionItem useStyle={false}>
  <HistoryElement
    title="Math and Informatics Specialization"
    location="Fazekas Mihály High School, Debrecen"
    time="2008 - 2014"
    slot="headerSlot"
  />
</AccordionItem> -->
