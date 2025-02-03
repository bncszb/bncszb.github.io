<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
</script>

<AccordionItem isOpen={true}>
  <!-- Header Content-->
  <p slot="headerSlot" class="accordion-header.level-1">Skills</p>
  <!-- Body Content -->

  <ul>
    <li>
      Programming Languages:
      <ul>
        <li>Python</li>
        <li>Typescript</li>
        <li>Go</li>
      </ul>
    </li>
    <li>
      Frameworks:
      <ul>
        <li>PyTorch</li>
        <li>Tensorflow</li>
        <li>Langchain</li>
      </ul>
    </li>
    <li>
      Tools:
      <ul>
        <li>Git</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>MLFlow</li>
        <li>Tensorboard</li>
        <li>LangFuse</li>
      </ul>
    </li>
  </ul>
</AccordionItem>
