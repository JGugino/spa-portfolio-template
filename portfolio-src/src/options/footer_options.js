export const footerOptions = {
    copyrightName: 'John Doe',
    copyrightYear: '2099',
    socialLinks: [
        {socialIcon: 'fb', socialLink: 'https://www.facebook.com'},
        {socialIcon: 'yt', socialLink: 'https://www.youtube.com'},
        {socialIcon: 'tw', socialLink: 'https://www.twitter.com'},
        {socialIcon: 'in', socialLink: 'https://www.linkedin.com'},
    ],
    footerStyles: {
        footerContainer:{
            backgroundColor: 'var(--doc-font-color)',
            borderRadius: '10px',
            width: '90%',
            maxWidth: '400px',
            margin: '0.4rem auto',
            padding: '0.8em 0',
            color: 'var(--doc-background-color)',
        },
        footerText:{
            default: {
                fontSize: '11pt',
                textAlign: 'center',
                userSelect: 'none'
            },
            desktop: {
                fontSize: '14pt'
            }
        },
        footerLinks:{
            default: {
                width: '38px',
                height: '38px',
                userSelect: 'none'
            },
            desktop: {
                width: '40px',
                height: '40px',
            }
        },
    }
}