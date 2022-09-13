export const contactOptions = {
    panelID: 'contact',
    panelHeaderText: 'CONTACT',
    panelStyles: {
        panelContainer: {
            backgroundColor: 'var(--doc-background-color)',
            borderRadius: '10px',
            minHeight: '260px',
            position: 'relative',
            padding: '1em 0'
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
        maxWidth: '600px',
        margin: '0 auto',
        gap: '0.6rem',
        borderRadius: '10px',
        padding: '2rem 0'
    },
    formInputs: {
        default:{
            width: '90%',
            height: '48px',
            borderRadius: '10px',
            fontSize: '14pt',
            padding: '0 0 0 0.6rem',
            border: '1px solid var(--doc-font-color)',
            transition: 'border ease-in-out 150ms'
        },
        focus: {
            border: '2px solid var(--doc-accent-color)',
            outline: 'none'
        }
    },
    formMessage: {
        default: {
            width: '90%',
            minWidth: '90%',
            maxWidth: '90%',
            height: '120px',
            minHeight: '120px',
            maxHeight: '160px',
            borderRadius: '10px',
            fontSize: '14pt',
            padding: '0.2em 0 0 0.4rem',
            border: '1px. solid var(--doc-font-color)',
            outline: 'none',
            transition: 'border ease-in-out 150ms'
        },
        focus: {
            border: '2px solid var(--doc-accent-color)',
        }
    },
    formButton: {
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
    },
    formError: {
        fontSize: '16pt',
        color: 'red',
        userSelect: 'none'
    }
}