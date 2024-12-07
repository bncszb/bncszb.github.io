<script>
  export let title = "";
  export let location = "";
  export let time = "";
</script>

<table class="history-element">
  <colgroup>
    <col style="width: 60%;" />
    <col style="width: 40%;" />
  </colgroup>
  <tbody>
    <tr>
      <td rowspan="2">
        <h3 class="centered tight">{title}</h3>
      </td>
      <td>
        <p class="centered tight">{location}</p>
      </td>
    </tr>
    <tr>
      <td>
        <p class="centered tight">{time}</p>
      </td>
    </tr>
  </tbody>
</table>

<style>
  .history-element {
    width: 100%;
    height: fit-content;
    border: 3px;
  }

  .history-element col {
    width: auto;
  }

  th,
  td {
    /* border: 1px solid black; */
    text-align: center;
    padding: 8px;
  }
</style>
