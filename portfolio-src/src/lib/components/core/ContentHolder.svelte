<script>
    import CtaPanel from "../CTAPanel.svelte";
    import { ctaOptions } from "../../../options/cta_options";

    function handleActionButton(actionHref){
        console.log(actionHref);
    }
</script>

<section class="content-holder">
    <CtaPanel {...ctaOptions} on:actionButtonClicked={({detail})=>{handleActionButton(detail)}}/>
</section>

<style>

</style>