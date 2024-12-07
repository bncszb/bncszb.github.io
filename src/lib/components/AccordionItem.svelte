<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  export let header: string;
  export let isOpen = false;
  export let level = 1;

  const dispatch = createEventDispatcher();

  function toggle() {
    isOpen = !isOpen;
    dispatch('toggle', { isOpen });
  }
</script>

<div class="accordion-item" style="margin-left: {(level - 1) * 20}px">
  <div class="accordion-header level-{level}" on:click={toggle}>
    {header}
  </div>
  {#if isOpen}
    <div class="accordion-body" transition:slide>
      <slot></slot>
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
    background-color: rgba(red, green, blue, 0);
    padding: 10px;
    cursor: pointer;
    user-select: none;
    /* font-weight: bold; */
  }
  .accordion-header.level-1 {
    font-size: 24px;
    color: #333;
  }
  .accordion-header.level-2 {
    font-size: 20px;
    color: #2d841b;
  }
  .accordion-header.level-3 {
    font-size: 18px;
    color: #bf1b1b;
  }
  .accordion-body {
    padding: 10px;
  }
</style>
