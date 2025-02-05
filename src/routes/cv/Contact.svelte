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
    margin-top: 3em;
    margin-bottom: 0em;
    width: 100%;
    height: fit-content;
    border: 3px;
    font-size: medium;
  }

  td {
    /* border: 1px solid black; */
    text-align: center;
    padding: 8px;
  }
</style>
