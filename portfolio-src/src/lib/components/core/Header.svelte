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
        Object.assign(header.style, styles.headerContainer);
        
        //## HEADER TEXT STYLING ##
        Object.assign(foundHeaderText.style, styles.headerText.default);

        //## HEADER LINKS STYLING ##
        foundHeaderLinks.forEach((link)=>{
            Object.assign(link.style, styles.headerLinks.default);

            link.addEventListener('mouseover', ()=>{ Object.assign(link.style, styles.headerLinks.hover); });

            link.addEventListener('mouseleave', ()=>{ Object.assign(link.style, styles.headerLinks.normal); });
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