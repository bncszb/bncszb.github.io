<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
  import {
    SiDocker,
    SiGit,
    SiGo,
    SiKubernetes,
    SiLangchain,
    SiMlflow,
    SiMysql,
    SiNeo4j,
    SiPython,
    SiPytorch,
    SiTensorflow,
    SiTypescript,
  } from "@icons-pack/svelte-simple-icons";

  const iconSize = 16;
</script>

<AccordionItem isOpen={true}>
  <!-- Header Content-->
  <p slot="headerSlot" class="accordion-header.level-1">Skills</p>
  <!-- Body Content -->

  <ul>
    <li>
      Programming Languages:
      <ul>
        <li>Python <SiPython color="#3776AB" size={iconSize} /></li>
        <li>Typescript <SiTypescript color="#007ACC" size={iconSize} /></li>
        <li>Go<SiGo color="#00ADD8" size={iconSize} /></li>
      </ul>
    </li>
    <li>
      Frameworks:
      <ul>
        <li>PyTorch <SiPytorch color="#EE4C2C" size={iconSize} /></li>
        <li>Tensorflow <SiTensorflow color="#FF6F00" size={iconSize} /></li>
        <li>Langchain <SiLangchain color="#FF6F00" size={iconSize} /></li>
      </ul>
    </li>
    <li>
      Tools:
      <ul>
        <li>Git <SiGit color="#F05032" size={iconSize} /></li>
        <li>Docker <SiDocker color="#2496ED" size={iconSize} /></li>
        <li>Kubernetes <SiKubernetes color="#326CE5" size={iconSize} /></li>
        <li>MLFlow <SiMlflow color="#02569B" size={iconSize} /></li>
        <li>Tensorboard</li>
        <li>LangFuse</li>
      </ul>
    </li>
    <li>
      Databases:
      <ul>
        <li>MySQL <SiMysql color="#4479A1" size={iconSize} /></li>
        <li>Qdrant</li>
        <li>Neo4j <SiNeo4j color="#008CC1" size={iconSize} /></li>
      </ul>
    </li>
    <li>
      Medical Ontologies:
      <ul>
        <li>ICD-10</li>
        <li>DrugBank</li>
        <li>SNOMED CT</li>
        <li>LOINC</li>
      </ul>
    </li>
  </ul></AccordionItem
>
