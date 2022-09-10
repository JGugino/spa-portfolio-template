<script>
    import { onMount } from 'svelte';

    export let panelID = 'example-panel';
    export let panelHeaderText = 'Example';
    export let panelStyles;

    const containerSuffix = '-plain-panel';
    const headerTextSuffix = '-plain-header-text';

    onMount(()=>{
        applyPanelStyles(panelID, panelStyles);
    });
    
    function applyPanelStyles(panelID, styles){
        const panelContainer = document.querySelector(`.${panelID}${containerSuffix}`);
        const headerText = document.querySelector(`.${panelID}${headerTextSuffix}`);

        if(styles.panelContainer) Object.assign(panelContainer.style, styles.panelContainer);
        else console.error('No panelContainer styles found');

        if(styles.panelHeaderText) Object.assign(headerText.style, styles.panelHeaderText);
        else console.error('No panelHeaderText styles found');

    }
</script>

<section class={`${panelID}${containerSuffix}`}>
    <h3 class={`${panelID}${headerTextSuffix}`}>{panelHeaderText}</h3>
    <slot name='plain-panel-slot'></slot>
</section>