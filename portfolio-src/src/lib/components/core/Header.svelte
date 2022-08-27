<script>
    import { onMount, createEventDispatcher } from 'svelte';

    export let headerText = 'Example';
    export let headerLinks = [
        {linkHref: '#projects', linkName: 'Projects'}
    ];
    export let headerStyles;

    const dispatch = createEventDispatcher();

    onMount(()=>{
        applyHeaderStyles(headerStyles);
    });

    function applyHeaderStyles(styles){
        //#region FIND HEADER ELEMENTS
        const header = document.querySelector('header');
        const foundHeaderText = document.querySelector('.header-text');
        const foundHeaderLinks = [];

        headerLinks.forEach((link)=>{
            foundHeaderLinks.push(document.querySelector(`.header-link-${link.linkHref.split('#')[1]}`));
        });
        //#endregion

        //#region START HEADER STYLING

        //## HEADER CONTAINER STYLING ##
        header.style.backgroundColor = styles.headerBGColor;
        header.style.borderRadius = styles.headerBorderRadius;
        header.style.margin = styles.headerMargin;
        header.style.padding = styles.headerPadding;
        
        //## HEADER TEXT STYLING ##
        foundHeaderText.style.color = styles.headerTextColor;
        foundHeaderText.style.fontSize = styles.headerMobileTextSize;
        foundHeaderText.style.textAlign = styles.headerTextAlignment;

        //## HEADER LINKS STYLING ##
        foundHeaderLinks.forEach((link)=>{
            link.style.color = styles.headerLinkNormalColor;
            link.style.textDecoration = styles.headerLinkTextDecoration;
            link.style.fontSize = styles.headerLinkMobileTextSize;
            link.style.transition = styles.headerLinkTransition;

            link.addEventListener('mouseover', ()=>{
                link.style.color = styles.headerLinkHoverColor;
            });

            link.addEventListener('mouseleave', ()=>{
                link.style.color = styles.headerLinkNormalColor;
            });

            //#### REMOVE THIS TO BE ABLE TO HIGHLIGHT HEADER LINKS ####
            link.style.userSelect = 'none';
        });
        //#endregion
    }

    function handleLink(linkHref){
        dispatch('headerLinkClicked', linkHref);
    }
</script>

<header class="flex flex-col flex-center">
    <h1 class='header-text'>{headerText}</h1>
    <nav class="flex flex-gap-one-half">
        {#each headerLinks as link}
        <a class={`header-link-${link.linkHref.split('#')[1]}`} on:click|preventDefault={()=>{handleLink(link.linkHref)}} href="{link.linkHref}">{link.linkName}</a>
        {/each}
    </nav>
</header>

<style>
    .header-text{
        user-select: none;
        cursor: default;
    }
</style>