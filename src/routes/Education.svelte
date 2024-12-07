<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
</script>

<AccordionItem>
  <p slot="headerSlot" class="accordion-header.level-1">Education</p>

  <!-- Doctor of Medicine -->
  <AccordionItem useStyle={false}>
    <table slot="headerSlot" class="education">
      <colgroup>
        <col style="width: 60%;" />
        <col style="width: 40%;" />
      </colgroup>
      <tbody>
        <tr>
          <td rowspan="2">
            <h3 class="centered tight">Doctor of Medicine</h3>
          </td>
          <td>
            <p class="centered tight">Semmelweis University, Budapest</p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="centered tight">2014 - 2021</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p>Juhu</p>
  </AccordionItem>

  <!-- Physics B.Sc. -->
  <AccordionItem useStyle={false}>
    <table slot="headerSlot" class="education">
      <colgroup>
        <col style="width: 60%;" />
        <col style="width: 40%;" />
      </colgroup>
      <tbody>
        <tr>
          <td rowspan="2">
            <h3 class="centered tight">Physics B.Sc.</h3>
          </td>
          <td>
            <p class="centered tight">
              Eötvös Loránd Science University, Budapest
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <p class="centered tight">2016 - 2020</p>
          </td>
        </tr>
      </tbody>
    </table>
    <p>Juhu</p>
  </AccordionItem>
</AccordionItem>

<style>
  .education {
    width: 100%;
    height: fit-content;
    border: 3px;
  }

  .education col {
    width: auto;
  }

  th,
  td {
    /* border: 1px solid black; */
    text-align: center;
    padding: 8px;
  }
</style>
