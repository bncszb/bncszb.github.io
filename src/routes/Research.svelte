<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
  import HistoryElement from "$lib/components/HistoryElement.svelte";
</script>

<h2>Research Experience</h2>

<AccordionItem useStyle={false}>
  <!-- Header Content-->

  <HistoryElement
    title="Variational autoencoders in visual systems"
    location="Wigner Research Centre for Physics"
    time="2021 - 2022"
    slot="headerSlot"
  />

  <!-- Body Content -->

  <ul>
    <li>
      Study of normal and chained variational autoencoder models trained on
      natural image patches
    </li>
    <li>Tensorflow Probability</li>
    <li>Achieved 6x speedup</li>
  </ul></AccordionItem
>

<AccordionItem useStyle={false}>
  <!-- Header Content-->

  <HistoryElement
    title="Cooperation formation in networks"
    location="Biot.ai Lab"
    time="2018 - 2021"
    slot="headerSlot"
  />

  <!-- Body Content -->

  <ul>
    <li>
      The role of nodes with fix strategies in spatial social dilemma games
    </li>
    <li>
      Prediction of nodes’ capability to spread cooperation using
      semi-supervised learning with Graph Convolutional Networks
    </li>
    <li>
      Tools:
      <ul>
        <li>PyTorch</li>
        <li>Deep Graph Library</li>
        <li>NetworkX</li>
      </ul>
    </li>
  </ul>
</AccordionItem>
