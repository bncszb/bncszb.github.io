<script>
  import AccordionItem from "$lib/components/AccordionItem.svelte";
  import { Icon } from "svelte-icons-pack";
  import { FiMail } from "svelte-icons-pack/fi";
  import {
    IoLocationOutline,
    IoLogoLinkedin,
    IoPhonePortraitOutline,
  } from "svelte-icons-pack/io";
  const iconSize = 16;
</script>

<AccordionItem>
  <!-- Header Slot -->
  <p slot="headerSlot" class="accordion-header.level-1">Contact Information</p>
  <!-- Body Content -->
  <div>
    <Icon src={FiMail} size={iconSize} />
    <a href="mailto:bszabo96@gmail.com">bszabo96@gmail.com</a>
  </div>
  <div>
    <Icon src={IoPhonePortraitOutline} size={iconSize} />
    +36 20 566 6348
  </div>
  <div>
    <Icon src={IoLogoLinkedin} size={iconSize} />
    <a href="https://www.linkedin.com/in/szabob/" target="_blank"> LinkedIn </a>
  </div>
  <div>
    <Icon src={IoLocationOutline} size={iconSize} /> Budapest, Hungary
  </div>
</AccordionItem>
