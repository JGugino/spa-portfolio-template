<script>
    import { onMount, createEventDispatcher } from 'svelte';
import PlainPanel from './PlainPanel.svelte';

    export let contactStyles;

    let contactName = '';
    let contactEmail = '';
    let contactMessage = '';

    const namePlaceholder = 'Name';
    const emailPlaceholder = 'Email';
    const messagePlaceholder = 'Message';

    const dispatch = createEventDispatcher();

    onMount(()=>{
        applyContactStyles(contactStyles);
    });

    function applyContactStyles(styles){
        const contactForm = document.querySelector('.contact-form');
        const nameInput = document.querySelector('.contact-name-input');
        const emailInput = document.querySelector('.contact-email-input');
        const submitButton = document.querySelector('.contact-submit-button');

        if(styles.formContainer) Object.assign(contactForm.style, styles.formContainer);
        else console.error('No formContainer styles found');

        if(styles.formInputs) Object.assign(nameInput.style, styles.formInputs);
        else console.error('No formInputs styles found');

        if(styles.formInputs) Object.assign(emailInput.style, styles.formInputs);
        else console.error('No formButton styles found');

        if(styles.formButton) Object.assign(submitButton.style, styles.formButton.default);
        else console.error('No formButton styles found');

        submitButton.addEventListener('mouseover', ()=>{Object.assign(submitButton.style, styles.formButton.hover)});

        submitButton.addEventListener('mouseleave', ()=>{Object.assign(submitButton.style, styles.formButton.default)});

    }

    function submitContactForm(){
        if(contactName !== ''){
            if(validateEmail(contactEmail)){

            }
        }
    }

    function validateEmail(email){
        return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };  
</script>

<div class="flex flex-col flex-center contact-form">
     <input class='contact-name-input' type="text" bind:value={contactName} placeholder={namePlaceholder}>
     <input class='contact-email-input' type="email" bind:value={contactEmail} placeholder={emailPlaceholder}>
     <textarea class='contact-message-input' bind:value={contactMessage} placeholder={messagePlaceholder}></textarea>
     <button class='contact-submit-button' on:click|preventDefault|stopPropagation={submitContactForm}>Send</button>
</div>