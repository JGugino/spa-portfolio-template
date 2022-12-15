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

export const skillsSection = {
    skillsStyles: {
        skillsContainer: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            maxHeight: '260px'
        },
        currentSkillsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem',
            maxHeight: '260px',
            gap: '1.2rem',
            overflowY: 'scroll',
        },
        skillItemContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '80px',
            height: '80px',
            padding: '3rem',
            gap: '0.2rem',
            zIndex: '2'
        },
        skillItemIcon: {
            width: '68px',
            height: '68px',
            padding: '0.6rem',
            borderRadius: '10px',
            background: 'var(--doc-font-color)',
        },
        skillItemText: {
            fontWeight: '600',
            color: 'var(--doc-font-color)',
        },
        bottomExtra: {
            position: 'absolute',
            display: 'flex',
            background: 'var(--doc-background-color)',
            opacity: '48%',
            borderRadius: '2px',
            filter: 'blur(12px)',
            width: '90%',
            height: '20px',
            bottom: '0',
            left: '50%',
            transform: 'translate(-52%, 0)',
            zIndex: '2',
        }
    },
    currentSkills: [
        {name: 'Accuracy', icon: './icons/skill_icons/icon_accuracy.png'},
        {name: 'Communication', icon: './icons/skill_icons/icon_communication.png'},
        {name: 'Conference', icon: './icons/skill_icons/icon_conference.png'},
        {name: 'Insight', icon: './icons/skill_icons/icon_insight.png'},
        {name: 'Clean', icon: './icons/skill_icons/icon_clean.png'},
        {name: 'Ideas', icon: './icons/skill_icons/icon_ideas.png'},
        {name: 'Inspection', icon: './icons/skill_icons/icon_inspection.png'},
        {name: 'Internet', icon: './icons/skill_icons/icon_internet.png'},
    ]
}