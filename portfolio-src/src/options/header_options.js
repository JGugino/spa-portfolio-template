export const headerOptions = {
    headerText: 'The Doe',
    headerLinks: [
        {linkHref: '#skills', linkName: 'Skills'},
        {linkHref: '#projects', linkName: 'Projects'},
        {linkHref: '#about', linkName: 'About'},
        {linkHref: '#contact', linkName: 'Contact'}
    ],
    headerStyles: {
        headerContainer: {
            backgroundColor: 'var(--doc-secondary-background-color)',
            borderRadius: '0 0 10px 10px',
            margin: '0',
            padding: '0.5rem 0 0.8rem 0'
        },
        headerText: {
            default:{
                color: 'var(--doc-font-color)',
                fontSize: '64pt',
                textAlign: 'center',
                userSelect: 'none',
                fontWeight: 'bold'
            },
            desktop:{
                fontSize: '68pt'
            }
        },
        headerLinks: {
            default:{
                fontSize: '14pt',     
                textDecoration: 'none',
                transition: 'color ease-in-out 200ms',
                color: 'var(--doc-font-color)',
                userSelect: 'none'
            },
            desktop:{
                fontSize: '16pt'
            },
            normal:{
                color: 'var(--doc-font-color)'
            },
            hover: {
                color: 'var(--doc-accent-color)',
            }
        },
    }
}