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
    <span class="toggle-icon">{isOpen ? '▼' : '▶'}</span>
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
    border: 1px solid #ddd;
    margin-bottom: 5px;
  }
  .accordion-header {
    background-color: #f5f5f5;
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
