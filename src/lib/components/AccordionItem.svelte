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

<div class="accordion-item">
  <div 
    class="accordion-header {isOpen ? 'open' : ''}" 
    on:click={toggle}
    aria-expanded={isOpen}
    role="button"
    tabindex="0"
    on:keydown={(e) => e.key === 'Enter' && toggle()}
  >
    <div class="header-content">
      <slot name="headerSlot"></slot>
    </div>
    <div class="toggle-icon">
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        class={isOpen ? 'open' : ''}
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  </div>
  
  {#if isOpen}
    <div class="accordion-body" transition:slide={{ duration: 300 }}>
      <div class="body-content">
        <slot></slot>
      </div>
    </div>
  {/if}
</div>

<style>
  .accordion-item {
    margin-bottom: 1rem;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 4px var(--color-shadow, rgba(0, 0, 0, 0.1));
    background-color: white;
  }
  
  .accordion-header {
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    transition: all var(--transition-speed, 0.3s) ease;
    position: relative;
  }
  
  .accordion-header:hover {
    background-color: rgba(44, 122, 123, 0.05);
  }
  
  .accordion-header.open {
    border-bottom: 1px solid var(--color-border, #e2e8f0);
  }
  
  .header-content {
    flex: 1;
  }
  
  .toggle-icon {
    padding: 0.75rem;
    color: var(--color-theme-1, #2c7a7b);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .toggle-icon svg {
    transition: transform var(--transition-speed, 0.3s) ease;
  }
  
  .toggle-icon svg.open {
    transform: rotate(180deg);
  }
  
  .accordion-body {
    background-color: white;
  }
  
  .body-content {
    padding: 1.5rem;
    line-height: 1.6;
    color: var(--color-text, #2d3748);
  }
</style>
