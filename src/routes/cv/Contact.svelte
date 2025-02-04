<script>
  import { Icon } from "svelte-icons-pack";
  import { FiMail } from "svelte-icons-pack/fi";
  import {
    IoLocationOutline,
    IoLogoLinkedin,
    IoPhonePortraitOutline,
  } from "svelte-icons-pack/io";
  const iconSize = 40;
</script>

<table>
  <!-- <colgroup>
    <col style="width: 60%;" />
    <col style="width: 40%;" />
  </colgroup> -->
  <tbody>
    <tr>
      <td> <Icon src={FiMail} size={iconSize} /></td>
      <td><a href="mailto:bszabo96@gmail.com">bszabo96@gmail.com</a> </td>
      <td> <Icon src={IoPhonePortraitOutline} size={iconSize} /></td>
      <td>+36 20 566 6348 </td>

      <td> <Icon src={IoLocationOutline} size={iconSize} /></td>
      <td> Budapest, Hungary</td>
      <td>
        <a href="https://www.linkedin.com/in/szabob/" target="_blank">
          <Icon src={IoLogoLinkedin} size={iconSize} />
        </a></td
      >
    </tr>
  </tbody>
</table>

<style>
  table {
    width: 100%;
    height: fit-content;
    border: 3px;
    font-size: medium;
  }

  table col {
    width: auto;
  }

  td {
    /* border: 1px solid black; */
    text-align: center;
    padding: 8px;
  }
</style>
