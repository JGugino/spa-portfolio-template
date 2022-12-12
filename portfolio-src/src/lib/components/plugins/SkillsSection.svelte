<script>
    import { onMount } from 'svelte';

    export let skillsStyles;
    export let currentSkills;

    onMount(()=>{
        applySkillsStyles(skillsStyles, currentSkills);
    });
    
    function applySkillsStyles(styles, skills){
        const skillsSection = document.querySelector('.skills-section');
        const currentSkillsContainer = document.querySelector('.current-skills');
        const bottomExtra = document.querySelector('.bottom-extra-skills');

        if(styles.skillsContainer) Object.assign(skillsSection.style, styles.skillsContainer);
        else console.error('No skillsContainer styles found');

        if(styles.currentSkillsContainer) Object.assign(currentSkillsContainer.style, styles.currentSkillsContainer);
        else console.error('No currentSkillsContainer styles found');

        if(styles.bottomExtra) Object.assign(bottomExtra.style, styles.bottomExtra);
        else console.error('No bottomExtra styles found');

        skills.forEach(skill => {
            const skillName = formatSkillName(skill.name);
            const skillItemContainer = document.querySelector(`.skill-${skillName}`);
            const skillItemIcon = document.querySelector(`.skill-icon-${skillName}`);
            const skillItemText = document.querySelector(`.skill-text-${skillName}`);
            
            if(styles.skillItemContainer) Object.assign(skillItemContainer.style, styles.skillItemContainer);
            else console.error('No skillItemContainer styles found');

            if(styles.skillItemIcon) Object.assign(skillItemIcon.style, styles.skillItemIcon);
            else console.error('No skillItemIcon styles found');
            
            if(styles.skillItemText) Object.assign(skillItemText.style, styles.skillItemText);
            else console.error('No skillItemText styles found');
        });
    }

    function formatSkillName(name){
        const splitName = name.split(' ');
        
        if(splitName.length <= 1) return name.toLowerCase();

        let finalName = '';
        splitName.forEach(name => {finalName += splitName.indexOf(name) == 0 ? name : `-${name}`;});

        return finalName.toLowerCase();
    }
</script>

<section class="skills-section">
    <div class="current-skills">
        {#each currentSkills as skill}
            <div class={`skill-${formatSkillName(skill.name)}`}>
                <img class={`skill-icon-${formatSkillName(skill.name)}`} src={skill.icon} alt={formatSkillName(skill.name)}>
                <p class={`skill-text-${formatSkillName(skill.name)}`}>{skill.name}</p>
            </div>
        {/each}
    </div>
    <div class='bottom-extra-skills'></div>
</section>

<!--REMOVE EVERYTHING TO REMOVE SCROLLBAR STYLES FROM THIS COMPONENT-->
<style>
    .current-skills::-webkit-scrollbar{
        width: 0.8rem;
    }

    .current-skills::-webkit-scrollbar-track{
        background-color: var(--doc-secondary-background-color);
    }

    .current-skills::-webkit-scrollbar-thumb{
        background-color: var(--doc-font-color);
        border-radius: 100vw;
        border: 0.24em solid var(--doc-secondary-background-color);
    }
</style>