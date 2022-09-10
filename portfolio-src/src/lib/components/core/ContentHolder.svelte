<script>
    import CtaPanel from "../CTAPanel.svelte";
    import StylizedPanel from "../StylizedPanel.svelte";
    import PlainPanel from "../PlainPanel.svelte";

    import ContactForm from "../ContactForm.svelte";

    import { ctaOptions } from "../../../options/cta_options";
    import { skillsOptions } from "../../../options/panel_options/skills_options";
    import { aboutOptions } from "../../../options/panel_options/about_options";
    import { projectsOptions } from "../../../options/panel_options/projects_options";
    import { contactOptions, formStyles } from "../../../options/panel_options/contact_options";

    function handleActionButton(actionHref){
        console.log(actionHref);
    }
</script>

<section class="content-holder">
    <!-- ### CALL TO ACTION PANEL ### -->
    <CtaPanel {...ctaOptions} on:actionButtonClicked={({detail})=>{handleActionButton(detail)}}/>
    
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
            <!--TODO: MOVE TO NEW COMPONENT WITH OPTIONS-->
            <h4>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, id corrupti. 
                Esse expedita et exercitationem unde autem pariatur dolorum sit nam officia architecto 
                enim delectus quidem blanditiis temporibus quis itaque fugit ex voluptates atque quae nostrum,
                reprehenderit minus. Accusantium doloribus sapiente nesciunt consequuntur culpa provident
                rem sit, nostrum molestias facere aspernatur repellat in! Accusantium a ratione magni, dolor eligendi
                exercitationem ex impedit minus vel, velit qui ipsum animi quas quis tenetur repudiandae fugiat reiciendis
                culpa consequuntur itaque vitae vero laudantium. Delectus doloremque, deserunt ea et laboriosam dolore
                nostrum aperiam quis suscipit? Voluptatem quisquam error veritatis pariatur vitae architecto ratione corrupti 
                tenetur, nisi modi distinctio sed mollitia at cum illo consequatur atque quibusdam voluptates blanditiis vel vero
                nesciunt beatae doloremque nulla. Facilis doloribus voluptas dignissimos, impedit maxime, explicabo optio nisi
                vero esse beatae natus labore eum repudiandae a odit distinctio. Ullam, commodi tenetur officia natus ducimus
                quos officiis nihil necessitatibus velit mollitia maxime deserunt voluptatem facilis dignissimos distinctio 
                sunt id consectetur. Suscipit nam alias dignissimos laborum facere iure rerum reiciendis sed officia quaerat,
                provident vel sequi nihil nisi quia eveniet odio dicta velit dolore sapiente blanditiis minima recusandae! Blanditiis,
                iste excepturi. Eligendi dolore officiis, blanditiis distinctio quaerat facilis quibusdam ipsum dolor!
            </h4>
        </div>
    </StylizedPanel>

    <!-- ### CONTACT PANEL ### -->
    <PlainPanel {...contactOptions}>
        <div slot="plain-panel-slot">
            <ContactForm contactStyles={formStyles}/>
        </div>
    </PlainPanel>
</section>

<style>

</style>