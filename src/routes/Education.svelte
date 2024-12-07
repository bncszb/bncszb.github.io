<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
</script>

<AccordionItem>
  <!-- Header Content -->
  <p slot="headerSlot" class="accordion-header.level-1">Education</p>
  <!-- Body Content -->
  <table class="education">
    <tbody>
      <tr>
        <td rowspan="2"><h3 class="centered tight">Doctor of Medicine</h3></td>
        <td><p class="centered tight">Semmelweis University, Budapest</p></td>
      </tr>
      <tr>
        <td><p class="centered tight">2014 - 2021</p></td>
      </tr>
    </tbody>
  </table>

  <h3>Physics B.Sc.</h3>
  <p>Eötvös Loránd Science University, Budapes</p>
  <p>2016 - 2020</p>
</AccordionItem>

<style>
  .education {
    width: 100%;
    height: fit-content;
    border: 3px;
  }

  /* table, th, td {
      border: 1px solid black;
} */

  .centered {
    text-align: center;
  }

  .tight {
    padding: 0px;
    margin: 0px;
  }
</style>
