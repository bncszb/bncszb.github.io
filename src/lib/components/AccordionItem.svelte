<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { slide } from "svelte/transition";

  export let isOpen = false;
  export let level = 1;

  const dispatch = createEventDispatcher();

  function toggle() {
    isOpen = !isOpen;
    dispatch("toggle", { isOpen });
  }
</script>

<div class="accordion-item" style="margin-left: {(level - 1) * 20}px">
  <div
    class="accordion-header level-{level} {isOpen ? 'open' : ''}"
    on:click={toggle}
  >
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
  }
  .accordion-item:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .accordion-header {
    cursor: pointer;
    user-select: none;
  }
  .accordion-header.level-1 {
    font-size: 24px;
    color: #333;
  }
  .accordion-header.level-2 {
    font-size: 20px;
    color: #333333;
  }
  .accordion-header.level-3 {
    font-size: 18px;
    color: #464645;
  }
  .accordion-header.open {
    border: 5px;
  }
  .accordion-body {
    padding: 10px;
  }
</style>
