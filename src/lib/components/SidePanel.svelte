<script lang="ts">
  export let isOpen: boolean;
  export let onClose: () => void;
</script>

<div class="side-panel {isOpen ? 'open' : ''}">
  <button class="close-btn" on:click={onClose}>×</button>
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .side-panel {
    position: fixed;
    right: -60%; /* Adjust for smoother animation */
    top: 0;
    width: 50%;
    height: 100vh;
    background: var(--color-bg-2);
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
    transition: right 0.3s ease-in-out;
    overflow-y: auto;
    padding: 20px;
    z-index: 1000;
  }
  .side-panel.open {
    right: 0;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }

  .content {
    padding: 20px;
    padding-bottom: 100px;
  }

  @media (max-width: 768px) {
    .side-panel {
      width: 90%;
      right: -110%; /* Adjust for smoother animation */
    }
  }
</style>
