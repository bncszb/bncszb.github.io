<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
  import HistoryElement from "$lib/components/HistoryElement.svelte";
</script>

<h2>Work Experience</h2>

<AccordionItem useStyle={false}>
  <!-- Header Content-->

  <HistoryElement
    title="Head of AI"
    location="Biot.ai Lab"
    time="2024 - ongoing"
    slot="headerSlot"
  />

  <!-- Body Content -->

  <ul>
    <li>
      Vectorized Patient Similarity search based on demographic data using
      qdrant
    </li>
    <li>
      Speech-to-form service for filling out medical forms using LangChain
    </li>
    <li>
      Tools:
      <ul>
        <li>qdrant</li>
        <li>LangChain</li>
        <li>TypeScript</li>
        <li>Neo4j</li>
      </ul>
    </li>
  </ul></AccordionItem
>

<AccordionItem useStyle={false}>
  <!-- Header Content-->

  <HistoryElement
    title="Software Developer"
    location="Biot.ai Lab"
    time="2022 - 2024"
    slot="headerSlot"
  />

  <!-- Body Content -->

  <ul>
    <li>
      Development of a patient administration and Clinical Decision Support site
    </li>
    <li>
      Researching and building an AI infrastructure for NLP projects, like Fall
      Risk Classification from progress notes
    </li>
    <li>
      Creation of a medical terminology matching microservice for free text,
      using medical knowledge graphs like SNOMED CT or RXNorm
    </li>
    <li>Medication microservice using DrugBank and Go</li>
    <li>
      Tools:
      <ul>
        <li>Django</li>
        <li>Go</li>
        <li>Kubernetes</li>
        <li>MySQL</li>
      </ul>
    </li>
  </ul>
</AccordionItem>
<AccordionItem useStyle={false}>
  <!-- Header Content-->

  <HistoryElement
    title="AI Researcher"
    location="Ulyssys"
    time="2021 - 2022"
    slot="headerSlot"
  />

  <!-- Body Content -->

  <ul>
    <li>Cancer segmentation in lung CT images using Deep Learning</li>
    <li>Ensuring compatibility between Medicine and Machine Learning</li>
    <li>
      Research and experimentation with Data Processing steps and Deep Learning
      architectures
    </li>
    <li>Data visualization and analysis</li>
    <li>
      Tools:
      <ul>
        <li>TensorFlow</li>
        <li>Pandas</li>
        <li>Docker</li>
      </ul>
    </li>
  </ul>
</AccordionItem>
