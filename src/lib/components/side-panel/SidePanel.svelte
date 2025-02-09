<svelte:options customElement="side-panel-component" />

<script lang="ts">
  import { closePanel, panelState } from "./side-panel.svelte";
</script>

<div class="side-panel {panelState.isPanelOpen ? 'open' : ''}">
  <button class="close-btn" onclick={closePanel}>×</button>
  <div class="content">
    {#if panelState.panelContent && panelState.panelContent.component}
      <panelState.panelContent.component {...panelState.panelContent.props} />
    {/if}
  </div>
</div>

<style>
  .side-panel {
    position: fixed;
    right: -60%;
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

  @media (max-width: 768px) {
    .side-panel {
      width: 90%;
      right: -110%;
    }
  }
  .open {
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
</style>
