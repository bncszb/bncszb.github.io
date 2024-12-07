<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
  import HistoryElement from "$lib/components/HistoryElement.svelte";
</script>

<h2>Work Experience</h2>

<AccordionItem useStyle={false}>
  <!-- Header Content-->

  <HistoryElement title="Head of AI" location="Biot.ai Lab" time="2024 - ongoing" slot="headerSlot" />

  <!-- Body Content -->

  <p class="date">January 2018 - Present</p>
  <ul>
    <li>
      Lead a team of 5 developers in creating web applications for clients
    </li>
    <li>
      Implemented responsive design principles, improving mobile traffic by 40%
    </li>
    <li>Optimized website performance, reducing load times by 25%</li>
  </ul>
</AccordionItem>

<AccordionItem useStyle={false}>
    <!-- Header Content-->
  
    <HistoryElement title="Software Developer" location="Biot.ai Lab" time="2022 - 2024" slot="headerSlot" />
  
  <!-- Body Content -->

  <p class="date">June 2015 - December 2017</p>
  <ul>
    <li>
      Developed and maintained websites for small to medium-sized businesses
    </li>
    <li>
      Collaborated with designers to implement visually appealing interfaces
    </li>
    <li>Integrated third-party APIs to enhance website functionality</li>
  </ul>
</AccordionItem>
