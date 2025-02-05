<script>
  import { Icon } from "svelte-icons-pack";
  import { FiMail } from "svelte-icons-pack/fi";
  import {
    IoLocationOutline,
    IoLogoLinkedin,
    IoPhonePortraitOutline,
  } from "svelte-icons-pack/io";

  const iconSize = 24; // Reduced size for better responsiveness
</script>

<div class="contact-info">
  <div class="contact-item">
    <Icon src={FiMail} size={iconSize} />
    <a href="mailto:bszabo96@gmail.com">bszabo96@gmail.com</a>
  </div>

  <div class="contact-item">
    <Icon src={IoPhonePortraitOutline} size={iconSize} />
    <span>+36 20 566 6348</span>
  </div>

  <div class="contact-item">
    <Icon src={IoLocationOutline} size={iconSize} />
    <span>Budapest, Hungary</span>
  </div>

  <div class="contact-item">
    <a href="https://www.linkedin.com/in/szabob/" target="_blank">
      <Icon src={IoLogoLinkedin} size={iconSize} />
    </a>
  </div>
</div>

<style>
  .contact-info {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin-top: 2em;
    font-size: medium;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .contact-info {
      flex-direction: column;
      text-align: center;
    }
  }
</style>
