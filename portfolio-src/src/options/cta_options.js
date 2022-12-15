export const ctaOptions = {
    //Header text for the CTA Panel (appear at the top of the panel)
    primaryText: 'John Doe',
    //Subtext (appears below the header text)
    subtext: 'Professional Plumber',
    //Motto text (appears below the subtext)
    mottoText: 'No toilet is safe from my plunger 🪠',
    //Button text for CTA button
    actionButtonText: 'CHECK OUT MY STUFF',
    //Section to scroll to when CTA button is pressed
    actionButtonHref: '#projects',

    //### CTA STYLES ###
    ctaStyles: {
        //Styles for the primary div that contains the CTA panel
        ctaContainer: {
            userSelect: 'none',
            margin: '0',
            padding: '4em 0',
        },
        // Styles for the text inside the CTA panel
        ctaTexts: {
            primaryText: {
                fontSize: '48pt',
                textAlign: 'center',
                color: 'var(--doc-font-color)',
                fontWeight: '600',
                textShadow: '0px 12px 14px rgba(0,0,0,40%)'
            },
            subtext: {
                fontSize: '20pt',
                textAlign: 'center',
                color: 'var(--doc-font-color)',
                userSelect: 'none',
                fontWeight: '400',
                textShadow: '0px 10px 8px rgba(0,0,0,40%)'
            },
            mottoText: {
                fontSize: '14pt',
                color: 'var(--doc-accent-color)',
                userSelect: 'none',
                fontWeight: '500'
            }
        },
        // Styles for the button inside the CTA panel
        actionButton: {
            //Normal styles for when the button isn't hovered
            default:{
                backgroundColor: 'var(--doc-font-color)',
                color: 'var(--doc-background-color)',
                fontSize: '14pt',
                width: '220px',
                height: '50px',
                borderRadius: '10px',
                border: '1px solid var(--doc-font-color)',
                cursor: 'pointer',
                transition: 'color ease-in-out 200ms, border-color ease-in-out 200ms'
            },
            //Styles to change when the button is hovered over
            hover: {
                borderColor: 'var(--doc-accent-color)',
                color: 'var(--doc-accent-color)'
            }
        }
    }
}