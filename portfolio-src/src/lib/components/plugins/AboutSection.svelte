<script>
    import { onMount } from 'svelte';

    export let aboutText = '';
    export let aboutStyles;

    onMount(()=>{
        applyAboutStyles(aboutStyles);
    });
    
    function applyAboutStyles(styles){
        const aboutSection = document.querySelector('.about-section');
        const aboutTextContainer = document.querySelector('.about-text-container');
        const aboutSectionText = document.querySelector('.about-section-text');
        const bottomExtra = document.querySelector('.bottom-extra-about');

        if(styles.aboutContainer) Object.assign(aboutSection.style, styles.aboutContainer);
        else console.error('No aboutContainer styles found');

        if(styles.aboutTextContainer) Object.assign(aboutTextContainer.style, styles.aboutTextContainer);
        else console.error('No aboutTextContainer styles found');

        if(styles.aboutText) Object.assign(aboutSectionText.style, styles.aboutText);
        else console.error('No aboutText styles found');

        if(styles.bottomExtra) Object.assign(bottomExtra.style, styles.bottomExtra);
        else console.error('No bottomExtra styles found');
    }


</script>

<div class="about-section">
    <div class="about-text-container">
        <p class='about-section-text'>{aboutText}</p>
    </div>
    <div class='bottom-extra-about'></div>
</div>

<!--REMOVE EVERYTHING TO REMOVE SCROLLBAR STYLES FROM THIS COMPONENT-->
<style>
    .about-text-container::-webkit-scrollbar{
        width: 0.8rem;
    }

    .about-text-container::-webkit-scrollbar-track{
        background-color: var(--doc-secondary-background-color);
    }

    .about-text-container::-webkit-scrollbar-thumb{
        background-color: var(--doc-font-color);
        border-radius: 100vw;
        border: 0.24em solid var(--doc-secondary-background-color);
    }
</style>