<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";

  export let isOpen = false;

  const dispatch = createEventDispatcher();

  function toggle() {
    isOpen = !isOpen;
    dispatch("toggle", { isOpen });
  }
</script>

<div class="accordion-item" on:click={toggle}>
  <div class="accordion-header {isOpen ? 'open' : ''}">
    <slot name="headerSlot"></slot>
    <!-- Slot for custom header content -->
  </div>
  {#if isOpen}
    <div class="accordion-body" transition:slide>
      <slot></slot>
      <!-- Slot for the body content -->
    </div>
  {/if}
</div>

<style>
  .accordion-item {
    margin-bottom: 5px;
    width: 95%;
    transition: box-shadow 0.3s ease;
    align-items: center;
    align-self: center;
    /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.1); */
    backdrop-filter: brightness(0.98);
  }
  .accordion-item:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    filter: brightness(1.01);
  }
  .accordion-header {
    cursor: pointer;
    user-select: none;
    font-size: 24px;
    color: #333;
  }

  .accordion-header.open {
    border: 5px;
  }
  .accordion-body {
    padding: 10px;
  }
</style>
