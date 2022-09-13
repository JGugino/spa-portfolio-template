<script>
  import Header from "./lib/components/core/Header.svelte";
  import ContentHolder from "./lib/components/core/ContentHolder.svelte";
  import Footer from "./lib/components/core/Footer.svelte";

  import { headerOptions } from './options/header_options';
  import { footerOptions } from './options/footer_options';


  function handleLinks(linkHref){
    scrollToPanel(linkHref.split('#')[1]);
  }

  function scrollToPanel(panelID){
    const panelClass = `.${panelID}-panel`

    const foundPanel = document.querySelector(panelClass);

    if(foundPanel) foundPanel.scrollIntoView({behavior: "smooth"});
  }

  function sendContactMessage(contactInfo){
    //### DO STUFF WITH COLLECTED MESSAGE ###
    console.log(contactInfo);
  }

</script>

<Header {...headerOptions} on:headerLinkClicked={({detail})=>{handleLinks(detail);}}/>

<main>
  <ContentHolder on:actionButtonClicked={({detail})=>{handleLinks(detail)}} on:messageSent={({detail})=>{sendContactMessage(detail)}}>

  </ContentHolder>
</main>

<Footer {...footerOptions} />

<style>

</style>
