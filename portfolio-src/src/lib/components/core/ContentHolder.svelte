<script>
    import CtaPanel from "../CTAPanel.svelte";
    import StylizedPanel from "../StylizedPanel.svelte";
    import PlainPanel from "../PlainPanel.svelte";

    import AboutSection from "../plugins/AboutSection.svelte";
    import ContactForm from "../plugins/ContactForm.svelte";

    import { ctaOptions } from "../../../options/cta_options";
    import { skillsOptions } from "../../../options/panel_options/skills_options";
    import { aboutOptions } from "../../../options/panel_options/about_options";
    import { projectsOptions } from "../../../options/panel_options/projects_options";
    import { contactOptions, formStyles } from "../../../options/panel_options/contact_options";
</script>

<section class="content-holder">
    <!-- ### CALL TO ACTION PANEL ### -->
    <CtaPanel {...ctaOptions} on:actionButtonClicked/>
    
    <!-- ### SKILLS PANEL ### -->
    <StylizedPanel {...skillsOptions}>
        <div slot="stylized-panel-slot">
            <h4>Skills here *smile*</h4>
        </div>
    </StylizedPanel>

    <!-- ### PROJECTS PANEL ### -->
    <PlainPanel {...projectsOptions}>
        <div slot="plain-panel-slot">
            <h4>Projects here *smile*</h4>
        </div>
    </PlainPanel>

    <!-- ### ABOUT PANEL ### -->
    <StylizedPanel {...aboutOptions}>
        <div slot="stylized-panel-slot">
            <!--TODO: Finish styling-->
            <AboutSection {...aboutOptions.aboutSection}/>
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