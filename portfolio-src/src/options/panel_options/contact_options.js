export const contactOptions = {
    panelID: 'contact-panel',
    panelHeaderText: 'CONTACT',
    panelStyles: {
        panelContainer: {
            backgroundColor: 'var(--doc-background-color)',
            borderRadius: '10px',
            minHeight: '260px',
            position: 'relative'
        },
        panelHeaderText: {
            textAlign: 'center',
            fontSize: '32pt',
            color: 'var(--doc-font-color)',
            textShadow: '0px 6px 10px rgba(0,0,0,40%)',
            userSelect: 'none'
        }
    },
}

export const formStyles = {
    formContainer: {
        backgroundColor: 'var(--doc-font-color)',
        width: '90%',
        maxWidth: '900px',
        margin: '0 auto',
        borderRadius: '10px',
        padding: '1rem 0'
    },
    formInputs: {

    },
    formButton: {
        default:{
            backgroundColor: 'var(--doc-background-color)',
            color: 'var(--doc-font-color)',
            fontSize: '14pt',
            width: '160px',
            height: '50px',
            borderRadius: '10px',
            border: '1px solid var(--doc-background-color)',
            cursor: 'pointer',
            transition: 'color ease-in-out 200ms, border-color ease-in-out 200ms'
        },
        hover: {
            borderColor: 'var(--doc-accent-color)',
            color: 'var(--doc-accent-color)'
        }
    }
}