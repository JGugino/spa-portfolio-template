//### OUTTER PANEL SETTINGS ###
export const projectsOptions = {
    //panel id used for locating elements for styling
    panelID: 'projects',
    //The text that appears at the top of the panel
    panelHeaderText: 'PROJECTS',

    //### OUTTER PANEL STYLES ###
    panelStyles: {
        //Primary outter container styles
        panelContainer: {
            backgroundColor: 'var(--doc-background-color)',
            borderRadius: '10px',
            minHeight: '260px',
            position: 'relative'
        },
        //Header text styles
        panelHeaderText: {
            textAlign: 'center',
            fontSize: '32pt',
            color: 'var(--doc-font-color)',
            textShadow: '0px 6px 10px rgba(0,0,0,40%)',
            userSelect: 'none'
        }
    }
}

//### INNER SECTION OPTIONS ###
export const projectsSection = {
    currentProjects: [
        {name: 'nonChat', icon: './project_images/nonchat_cover.png', coverAlt: 'nonChat Cover', link: 'https://nonchat.me'},
        {name: 'Nicular', icon: './project_images/nicular_cover.png', coverAlt: 'nonChat Cover', link: 'https://nonchat.me'},
        {name: 'PhotoWords', icon: './project_images/photowords_cover.png', coverAlt: 'nonChat Cover', link: 'https://nonchat.me'},
        {name: 'Todo List', icon: './project_images/todos_list_cover.png', coverAlt: 'nonChat Cover', link: 'https://nonchat.me'}
    ],
    projectsStyles: {
        projectsContainer: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '260px'
        },
        currentProjectsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            maxHeight: '260px',
            gap: '1.6rem',
            overflowY: 'scroll',
        },
        projectItemContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '200px',
            height: '160px',
            padding: '2rem',
            gap: '0.2rem',
            zIndex: '2'
        },
        projectItemIcon: {
            width: '220px',
            height: '120px',
            padding: '0.6rem',
            borderRadius: '10px',
            background: 'var(--doc-font-color)',
        },
        projectItemText: {
            fontWeight: '600',
            color: 'var(--doc-font-color)',
        }
    }
}