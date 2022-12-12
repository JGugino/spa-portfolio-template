<script>
    import CtaPanel from "../CTAPanel.svelte";
    import StylizedPanel from "../StylizedPanel.svelte";
    import PlainPanel from "../PlainPanel.svelte";

    import SkillsSection from "../plugins/SkillsSection.svelte";
    import ProjectsSection from "../plugins/ProjectsSection.svelte";
    import AboutSection from "../plugins/AboutSection.svelte";
    import ContactForm from "../plugins/ContactForm.svelte";

    import { ctaOptions } from "../../../options/cta_options";
    import { skillsOptions, skillsSection } from "../../../options/panel_options/skills_options";
    import { aboutOptions, aboutSection } from "../../../options/panel_options/about_options";
    import { projectsOptions, projectsSection } from "../../../options/panel_options/projects_options";
    import { contactOptions, formStyles } from "../../../options/panel_options/contact_options";
</script>

<section class="content-holder">
    <!-- ### CALL TO ACTION PANEL ### -->
    <CtaPanel {...ctaOptions} on:actionButtonClicked/>
    
    <!-- ### SKILLS PANEL ### -->
    <StylizedPanel {...skillsOptions}>
        <div slot="stylized-panel-slot">
            <SkillsSection {...skillsSection}/>
        </div>
    </StylizedPanel>

    <!-- ### PROJECTS PANEL ### -->
    <PlainPanel {...projectsOptions}>
        <div slot="plain-panel-slot">
            <ProjectsSection {...projectsSection}/>
        </div>
    </PlainPanel>

    <!-- ### ABOUT PANEL ### -->
    <StylizedPanel {...aboutOptions}>
        <div slot="stylized-panel-slot">
            <AboutSection {...aboutSection}/>
        </div>
    </StylizedPanel>

    <!-- ### CONTACT PANEL ### -->
    <PlainPanel {...contactOptions}>
        <div slot="plain-panel-slot">
            <ContactForm contactStyles={formStyles} on:messageSent/>
        </div>
    </PlainPanel>
</section>

<style>

</style>