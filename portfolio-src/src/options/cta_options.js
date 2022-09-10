export const ctaOptions = {
    primaryText: 'John Doe',
    subtext: 'Professional Plumber',
    mottoText: 'No toilet is safe from my plunger 🪠',
    actionButtonText: 'CHECK OUT MY STUFF',
    actionButtonHref: '#projects',
    ctaStyles: {
        ctaContainer: {
            userSelect: 'none',
            margin: '0',
            padding: '4em 0',
        },
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
        actionButton: {
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
            hover: {
                borderColor: 'var(--doc-accent-color)',
                color: 'var(--doc-accent-color)'
            }
        }
    }
}