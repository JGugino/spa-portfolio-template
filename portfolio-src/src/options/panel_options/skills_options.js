export const skillsOptions = {
    panelID: 'skills',
    panelHeaderText: 'SKILLS',
    panelStyles: {
        panelContainer: {
            backgroundColor: 'var(--doc-secondary-background-color)',
            borderRadius: '10px',
            minHeight: '260px',
            position: 'relative',
            margin: '1rem 0'
        },
        panelHeaderText: {
            textAlign: 'center',
            fontSize: '32pt',
            color: 'var(--doc-font-color)',
            textShadow: '0px 6px 10px rgba(0,0,0,40%)',
            userSelect: 'none'
        },
        panelTopExtra: {
            position: 'absolute',
            width: '0',
            height: '0',
            top: '-48px',
            left: '0',
            borderBottom: '60px solid var(--doc-secondary-background-color)',
            borderRight: '60px solid transparent',
        },
        panelBottomExtra: {
            position: 'absolute',
            width: '0',
            height: '0',
            bottom: '-48px',
            right: '0',
            borderTop: '60px solid var(--doc-secondary-background-color)',
            borderLeft: '60px solid transparent',
            zIndex: '1'
        }
    }
}