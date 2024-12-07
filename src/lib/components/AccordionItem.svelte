<script lang="ts">
  import { slide } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

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
  <div class="accordion-header" on:click={toggle}>
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
  }
  .accordion-body {
    padding: 10px;
  }
  .toggle-icon {
    display: inline-block;
    width: 20px;
  }
</style>
