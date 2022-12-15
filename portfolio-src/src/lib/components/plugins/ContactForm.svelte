<script>
    import { onMount, createEventDispatcher } from 'svelte';

    export let contactStyles;

    let contactName = '';
    let contactEmail = '';
    let contactMessage = '';
    let contactError = '';

    const namePlaceholder = 'Name';
    const emailPlaceholder = 'Email';
    const messagePlaceholder = 'Please enter a message';
    const formSendButtonText = 'Send';

    const dispatch = createEventDispatcher();

    onMount(()=>{
        applyContactStyles(contactStyles);
    });

    //### APPLY SPECIFIED STYLES TO PROPER FORM ELEMENTS
    function applyContactStyles(styles){
        //### FIND FORM ELEMENTS ###
        const contactForm = document.querySelector('.contact-form');
        const nameInput = document.querySelector('.contact-name-input');
        const emailInput = document.querySelector('.contact-email-input');
        const messageInput = document.querySelector('.contact-message-input');
        const submitButton = document.querySelector('.contact-submit-button');
        const errorMessage = document.querySelector('.form-error');

        //### MAKE SURE STYLES EXIST AND APPLY TO CORRECT ELEMENT ###
        if(styles.formContainer) Object.assign(contactForm.style, styles.formContainer);
        else console.error('No formContainer styles found');

        if(styles.formInputs) Object.assign(nameInput.style, styles.formInputs.default);
        else console.error('No formInputs styles found');

        if(styles.formInputs) Object.assign(emailInput.style, styles.formInputs.default);
        else console.error('No formInputs styles found');

        if(styles.formMessage) Object.assign(messageInput.style, styles.formMessage.default);
        else console.error('No formMessage styles found');

        if(styles.formButton) Object.assign(submitButton.style, styles.formButton.default);
        else console.error('No formButton styles found');

        if(styles.formError) Object.assign(errorMessage.style, styles.formError);
        else console.error('No formError styles found');

        //### APPLY HOVER STYLES FOR INPUTS & BUTTON ###
        nameInput.addEventListener('focus', ()=>{Object.assign(nameInput.style, styles.formInputs.focus)});
        nameInput.addEventListener('focusout', ()=>{Object.assign(nameInput.style, styles.formInputs.default)});

        emailInput.addEventListener('focus', ()=>{Object.assign(emailInput.style, styles.formInputs.focus)});
        emailInput.addEventListener('focusout', ()=>{Object.assign(emailInput.style, styles.formInputs.default)});

        messageInput.addEventListener('focus', ()=>{Object.assign(messageInput.style, styles.formMessage.focus)});
        messageInput.addEventListener('focusout', ()=>{Object.assign(messageInput.style, styles.formMessage.default)});

        submitButton.addEventListener('mouseover', ()=>{Object.assign(submitButton.style, styles.formButton.hover)});
        submitButton.addEventListener('mouseleave', ()=>{Object.assign(submitButton.style, styles.formButton.default)});
    }

    //### VALIDATE AND SUBMIT FORM INFORMATION AND HANDLE IT IN App.svelte ###
    function submitContactForm(){
        if(contactName.length > 0){
            if(validateEmail(contactEmail)){
                if(contactMessage.length > 0){
                    dispatch('messageSent', {name: contactName, email: contactEmail, message: contactMessage});
                    resetForm();
                    return;
                }
                return contactError = 'You must enter a message';
            }
            return contactError = 'Your email is invalid';
        }
        return contactError = 'You must enter a name';
    }

    //### RESETS THE FORM AND CLEARS ALL THE INPUTS ###
    function resetForm(){
        contactName = '';
        contactEmail = '';
        contactMessage = '';
        contactError = '';
    }

    //### MAKES SURE THE EMAIL PROVIDED IS VALID ###
    function validateEmail(email){
        return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };  
</script>

<div class="flex flex-col flex-center flex-gap-one">
    <div class="flex flex-col flex-center contact-form">
        <p class='form-error'>{contactError}</p>
        <input class='contact-name-input' type="text" bind:value={contactName} placeholder={namePlaceholder}>
        <input class='contact-email-input' type="email" bind:value={contactEmail} placeholder={emailPlaceholder}>
        <textarea class='contact-message-input' bind:value={contactMessage} placeholder={messagePlaceholder}></textarea>
    </div>
     <button class='contact-submit-button' on:click|preventDefault|stopPropagation={submitContactForm}>{formSendButtonText}</button>
</div>