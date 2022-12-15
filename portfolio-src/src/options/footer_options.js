export const footerOptions = {
    //The copyrighters name displayed in the footer
    copyrightName: 'John Doe',
    //The copyright year
    copyrightYear: '2099',
    //Social media icons that should show in the footer, leave empty array to not display social icons
    //(fb = Facebook, yt = YouTube, tw = Twitter, in = Linkedin)
    socialLinks: [
        {socialIcon: 'fb', socialLink: 'https://www.facebook.com'},
        {socialIcon: 'yt', socialLink: 'https://www.youtube.com'},
        {socialIcon: 'tw', socialLink: 'https://www.twitter.com'},
        {socialIcon: 'in', socialLink: 'https://www.linkedin.com'},
    ],

    //### FOOTER STYLES ###
    footerStyles: {
        //Footer primary container styles
        footerContainer:{
            backgroundColor: 'var(--doc-font-color)',
            borderRadius: '10px',
            width: '90%',
            maxWidth: '400px',
            margin: '0.4rem auto',
            padding: '0.8em 0',
            color: 'var(--doc-background-color)',
        },
        // Footer text styles (default = Mobile/Tablet Viewing, desktop = Desktop Viewing)
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
        // Footer links styles (default = Mobile/Tablet Viewing, desktop = Desktop Viewing)
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