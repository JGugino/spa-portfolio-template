<script>
    import { onMount } from 'svelte';

    export let aboutText = '';
    export let aboutStyles;

    onMount(()=>{
        applyAboutStyles(aboutStyles);
    });
    
    function applyAboutStyles(styles){
        const aboutSection = document.querySelector('.about-section');
        const aboutSectionText = document.querySelector('.about-section-text');
        const bottomExtra = document.querySelector('.bottom-extra');

        if(styles.aboutContainer) Object.assign(aboutSection.style, styles.aboutContainer);
        else console.error('No aboutContainer styles found');

        if(styles.aboutText) Object.assign(aboutSectionText.style, styles.aboutText);
        else console.error('No aboutText styles found');

        if(styles.bottomExtra) Object.assign(bottomExtra.style, styles.bottomExtra);
        else console.error('No bottomExtra styles found');
    }


</script>

<div>
    <div class="about-section">
        <p class='about-section-text'>{aboutText}</p>
    </div>
    <span class='bottom-extra'></span>
</div>

<!--REMOVE EVERYTHING TO REMOVE SCROLLBAR STYLES FROM THIS COMPONENT-->
<style>
    .about-section::-webkit-scrollbar{
        width: 0.8rem;
    }

    .about-section::-webkit-scrollbar-track{
        background-color: var(--doc-secondary-background-color);
    }

    .about-section::-webkit-scrollbar-thumb{
        background-color: var(--doc-font-color);
        border-radius: 100vw;
        border: 0.24em solid var(--doc-secondary-background-color);
    }
</style>