<script lang="ts">
  import { onMount } from 'svelte';
  
  // Form state
  let name = '';
  let email = '';
  let subject = '';
  let message = '';
  let isSubmitting = false;
  let isSubmitted = false;
  let errorMessage = '';
  
  // Form validation
  let isNameValid = true;
  let isEmailValid = true;
  let isSubjectValid = true;
  let isMessageValid = true;
  
  function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  function validateForm(): boolean {
    isNameValid = name.trim().length > 0;
    isEmailValid = validateEmail(email);
    isSubjectValid = subject.trim().length > 0;
    isMessageValid = message.trim().length > 0;
    
    return isNameValid && isEmailValid && isSubjectValid && isMessageValid;
  }
  
  async function handleSubmit() {
    if (!validateForm()) {
      return;
    }
    
    isSubmitting = true;
    errorMessage = '';
    
    try {
      // In a real application, you would send the form data to a server
      // For now, we'll just simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      name = '';
      email = '';
      subject = '';
      message = '';
      
      // Show success message
      isSubmitted = true;
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        isSubmitted = false;
      }, 5000);
    } catch (error) {
      errorMessage = 'There was an error submitting the form. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="contact-form-container">
  <h2>Get in Touch</h2>
  <p class="form-description">Have a question or want to work together? Fill out the form below and I'll get back to you as soon as possible.</p>
  
  {#if isSubmitted}
    <div class="success-message">
      <p>Thank you for your message! I'll get back to you soon.</p>
    </div>
  {:else}
    <form on:submit|preventDefault={handleSubmit} class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input 
          type="text" 
          id="name" 
          bind:value={name} 
          class:invalid={!isNameValid}
          placeholder="Your name"
          required
        />
        {#if !isNameValid}
          <span class="error-message">Please enter your name</span>
        {/if}
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input 
          type="email" 
          id="email" 
          bind:value={email} 
          class:invalid={!isEmailValid}
          placeholder="Your email address"
          required
        />
        {#if !isEmailValid}
          <span class="error-message">Please enter a valid email address</span>
        {/if}
      </div>
      
      <div class="form-group">
        <label for="subject">Subject</label>
        <input 
          type="text" 
          id="subject" 
          bind:value={subject} 
          class:invalid={!isSubjectValid}
          placeholder="Subject of your message"
          required
        />
        {#if !isSubjectValid}
          <span class="error-message">Please enter a subject</span>
        {/if}
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea 
          id="message" 
          bind:value={message} 
          class:invalid={!isMessageValid}
          placeholder="Your message"
          rows="5"
          required
        ></textarea>
        {#if !isMessageValid}
          <span class="error-message">Please enter your message</span>
        {/if}
      </div>
      
      {#if errorMessage}
        <div class="error-container">
          <p>{errorMessage}</p>
        </div>
      {/if}
      
      <button 
        type="submit" 
        class="submit-button" 
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  {/if}
</div>

<style>
  .contact-form-container {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px var(--color-shadow, rgba(0, 0, 0, 0.1));
    padding: 2rem;
    max-width: 600px;
    margin: 0 auto;
  }
  
  h2 {
    color: var(--color-theme-1, #2c7a7b);
    margin-top: 0;
    text-align: center;
    font-size: 1.75rem;
  }
  
  .form-description {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-text-light, #4a5568);
  }
  
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  label {
    font-weight: 500;
    color: var(--color-text, #2d3748);
    font-size: 0.95rem;
  }
  
  input, textarea {
    padding: 0.75rem;
    border: 1px solid var(--color-border, #e2e8f0);
    border-radius: 4px;
    font-family: var(--font-body, sans-serif);
    font-size: 1rem;
    transition: border-color var(--transition-speed, 0.3s) ease, box-shadow var(--transition-speed, 0.3s) ease;
  }
  
  input:focus, textarea:focus {
    outline: none;
    border-color: var(--color-theme-1, #2c7a7b);
    box-shadow: 0 0 0 3px rgba(44, 122, 123, 0.1);
  }
  
  input.invalid, textarea.invalid {
    border-color: #e53e3e;
  }
  
  .error-message {
    color: #e53e3e;
    font-size: 0.85rem;
  }
  
  .error-container {
    background-color: #fff5f5;
    border: 1px solid #fed7d7;
    border-radius: 4px;
    padding: 0.75rem;
    color: #c53030;
    margin-bottom: 1rem;
  }
  
  .error-container p {
    margin: 0;
  }
  
  .submit-button {
    background-color: var(--color-theme-1, #2c7a7b);
    color: white;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color var(--transition-speed, 0.3s) ease;
    align-self: flex-end;
  }
  
  .submit-button:hover:not(:disabled) {
    background-color: var(--color-theme-2, #3182ce);
  }
  
  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  .success-message {
    background-color: #f0fff4;
    border: 1px solid #c6f6d5;
    border-radius: 4px;
    padding: 1.5rem;
    text-align: center;
  }
  
  .success-message p {
    color: #2f855a;
    font-weight: 500;
    margin: 0;
  }
  
  @media (max-width: 600px) {
    .contact-form-container {
      padding: 1.5rem;
    }
    
    .submit-button {
      width: 100%;
    }
  }
</style>
