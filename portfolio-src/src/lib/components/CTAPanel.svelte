<script>
    import { onMount, createEventDispatcher } from 'svelte';

    export let primaryText = 'Example';
    export let subtext = 'Example Subtext';
    export let mottoText = 'Example motto text';
    export let actionButtonText = 'Example Button';
    export let actionButtonHref = '#example';
    export let ctaStyles;

    const dispatch = createEventDispatcher();

    onMount(()=>{
        applyCTAStyles(ctaStyles);
    });

    function applyCTAStyles(styles){
        //#region FIND CTA ELEMENTS
        const ctaPanel = document.querySelector('.cta-panel');
        const primaryText = document.querySelector('.primary-text');
        const subtext = document.querySelector('.subtext');
        const mottoText = document.querySelector('.motto-text');
        const actionButton = document.querySelector('.action-button');
        //#endregion

        //#region START CTA STYLING

        //## CTA PANEL CONTAINER STYLING ##
        Object.assign(ctaPanel.style, styles.ctaContainer);

        //## CTA PRIMARY TEXT STYLING ##
        Object.assign(primaryText.style, styles.ctaTexts.primaryText);

        //## CTA SUBTEXT STYLING ##
        Object.assign(subtext.style, styles.ctaTexts.subtext);

        //## CTA MOTTO TEXT STYLING ##
        Object.assign(mottoText.style, styles.ctaTexts.mottoText);

        //## CTA ACTION BUTTON STYLING ##
        Object.assign(actionButton.style, styles.actionButton.default);

        actionButton.addEventListener('mouseover', ()=>{Object.assign(actionButton.style, styles.actionButton.hover)});

        actionButton.addEventListener('mouseleave', ()=>{Object.assign(actionButton.style, styles.actionButton.default)});

        //#endregion
    }

    function actionButtonClicked(){
        dispatch('actionButtonClicked', actionButtonHref);
    }
</script>

<section class="flex flex-col flex-center flex-gap-one cta-panel">
    <div>
        <h2 class='primary-text'>{primaryText}</h2>
        <h3 class='subtext'>{subtext}</h3>
    </div>
    <p class='motto-text'>{mottoText}</p>
    <button class='action-button' on:click={actionButtonClicked}>{actionButtonText}</button>
</section>