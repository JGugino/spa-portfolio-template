<script>
    import { onMount } from 'svelte';

    export let panelID = 'example-panel';
    export let panelHeaderText = 'Example';
    export let panelStyles;

    const containerSuffix = '-stylized-panel';
    const headerTextSuffix = '-stylized-header-text';
    const topExtraSuffix = '-stylized-top-extra';
    const bottomExtraSuffix = '-stylized-bottom-extra';

    onMount(()=>{
        applyPanelStyles(panelID, panelStyles);
    });

    function applyPanelStyles(panelID, styles){
        const panelContainer = document.querySelector(`.${panelID}${containerSuffix}`);
        const headerText = document.querySelector(`.${panelID}${headerTextSuffix}`);
        const panelTopExtra = document.querySelector(`.${panelID}${topExtraSuffix}`);
        const panelBottomExtra = document.querySelector(`.${panelID}${bottomExtraSuffix}`);

        if(styles.panelContainer) Object.assign(panelContainer.style, styles.panelContainer);
        else console.error('No panelContainer styles found');

        if(styles.panelHeaderText) Object.assign(headerText.style, styles.panelHeaderText);
        else console.error('No panelHeaderText styles found');

        if(styles.panelTopExtra) Object.assign(panelTopExtra.style, styles.panelTopExtra);
        else console.error('No panelTopExtra styles found');

        if(styles.panelBottomExtra) Object.assign(panelBottomExtra.style, styles.panelBottomExtra);
        else console.error('No panelBottomExtra styles found');

    }
</script>

<section class={`${panelID}${containerSuffix}`}>
    <span class={`${panelID}${topExtraSuffix}`}></span>
    <h3 class={`${panelID}${headerTextSuffix}`}>{panelHeaderText}</h3>
    <slot name='stylized-panel-slot'></slot>
    <span class={`${panelID}${bottomExtraSuffix}`}></span>
</section>