<script>
    import { onMount } from 'svelte';

    export let projectsStyles;
    export let currentProjects;

    onMount(()=>{
        applyProjectsStyles(projectsStyles, currentProjects);
    });

    function applyProjectsStyles(styles, projects){
        const projectsSection = document.querySelector('.projects-section');
        const currentProjectsContainer = document.querySelector('.current-projects');

        if(styles.projectsContainer) Object.assign(projectsSection.style, styles.projectsContainer);
        else console.error('No projectsContainer styles found');

        if(styles.currentProjectsContainer) Object.assign(currentProjectsContainer.style, styles.currentProjectsContainer);
        else console.error('No currentProjectsContainer styles found');

        projects.forEach(project => {
            const projectName = formatProjectName(project.name);
            const projectItemContainer = document.querySelector(`.project-${projectName}`);
            const projectItemIcon = document.querySelector(`.project-icon-${projectName}`);
            const projectItemText = document.querySelector(`.project-text-${projectName}`);
            
            if(styles.projectItemContainer) Object.assign(projectItemContainer.style, styles.projectItemContainer);
            else console.error('No projectItemContainer styles found');

            if(styles.projectItemIcon) Object.assign(projectItemIcon.style, styles.projectItemIcon);
            else console.error('No projectItemIcon styles found');
            
            if(styles.projectItemText) Object.assign(projectItemText.style, styles.projectItemText);
            else console.error('No projectItemText styles found');
        });
    }

    function formatProjectName(name){
        const splitName = name.split(' ');
        
        if(splitName.length <= 1) return name.toLowerCase();

        let finalName = '';
        splitName.forEach(name => {finalName += splitName.indexOf(name) == 0 ? name : `-${name}`;});

        return finalName.toLowerCase();
    }
</script>

<section class="projects-section">
    <div class="current-projects">
        {#each currentProjects as project}
            <div class={`project-${formatProjectName(project.name)}`}>
                <a href={project.link}><img class={`project-icon-${formatProjectName(project.name)}`} src={project.icon} alt={formatProjectName(project.name)}></a>
                <p class={`project-text-${formatProjectName(project.name)}`}>{project.name}</p>
            </div>
        {/each}
    </div>
</section>

<!--REMOVE EVERYTHING BELOW THIS COMMENT TO REMOVE SCROLLBAR STYLES FROM THIS COMPONENT-->
<style>
    .current-projects::-webkit-scrollbar{
        width: 0.8rem;
    }

    .current-projects::-webkit-scrollbar-track{
        background-color: var(--doc-background-color);
    }

    .current-projects::-webkit-scrollbar-thumb{
        background-color: var(--doc-font-color);
        border-radius: 100vw;
        border: 0.24em solid var(--doc-background-color);
    }
</style>