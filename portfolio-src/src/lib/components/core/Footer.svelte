<script>
    import { onMount } from 'svelte';

    export let copyrightName = 'Example';
    export let copyrightYear = '2099';
    export let socialLinks = [
        {socialIcon: 'fb', socialLink: 'https://www.facebook.com'}
    ];
    export let footerStyles;

    onMount(()=>{
        applyFooterStyles(footerStyles);
    });

    function applyFooterStyles(styles){
        //#region FIND FOOTER ELEMENTS
        const footer = document.querySelector('footer');
        const foundFooterText = document.querySelector('.footer-text');
        const foundFooterLinks = document.querySelectorAll('.social-icon');
        //#endregion

        //#region START FOOTER STYLING

        //## FOOTER CONTAINER STYLING ##
        Object.assign(footer.style, styles.footerContainer);
        
        //## FOOTER TEXT STYLING ##
        Object.assign(foundFooterText.style, styles.footerText.default);

        //## FOOTER SOCIALS STYLING ##
        foundFooterLinks.forEach((link)=>{ Object.assign(link.firstChild.style, styles.footerLinks.default); });
        
        //#endregion
    }

    function determineSocialIcon(icon){
        switch(icon){
            case 'fb':
                return './icons/social_icons/circle_fb_icon.png';
            case 'yt':
                return './icons/social_icons/circle_yt_icon.png';
            case 'tw':
                return './icons/social_icons/circle_tweet_icon.png';
            case 'in':
                return './icons/social_icons/circle_in_icon.png';

                default:
                    return './icons/social_icons/circle_fb_icon.png';
        }
    }

    function determineSocialIconAlt(icon){
        switch(icon){
            case 'fb':
                return 'Blue Circle Facebook Icon';
            case 'yt':
                return 'Red Circle Youtube Icon';
            case 'tw':
                return 'Blue Circle Twitter Icon';
            case 'in':
                return 'Blue Circle Linkedin Icon';

                default:
                    return 'Unknown Icon, Default is Red Cirlce Youtube Icon';
        }
    }
</script>

<footer class="flex flex-col flex-center flex-gap-one">
    <h3 class='footer-text'>&copy; Copyright {copyrightName} {copyrightYear}, All right reserved.</h3>
    <nav class="flex flex-gap-one">
        {#each socialLinks as link}
        <a class='social-icon' href="{link.socialLink}"><img src={determineSocialIcon(link.socialIcon)} alt={determineSocialIconAlt(link.socialIcon)}></a>
        {/each}
    </nav>
</footer>