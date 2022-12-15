<script>
  //Imports for core components
  import Header from "./lib/components/core/Header.svelte";
  import ContentHolder from "./lib/components/core/ContentHolder.svelte";
  import Footer from "./lib/components/core/Footer.svelte";

  //Imports for header and footer options
  import { headerOptions } from './options/header_options';
  import { footerOptions } from './options/footer_options';

  function handleLinks(linkHref){
    scrollToPanel(linkHref.split('#')[1]);
  }

  //Scroll page to specified id
  function scrollToPanel(panelID){
    const panelClass = `.${panelID}-panel`

    const foundPanel = document.querySelector(panelClass);

    if(foundPanel) foundPanel.scrollIntoView({behavior: "smooth"});
  }

  //Handle want happens after a contact message is sent
  function sendContactMessage(contactInfo){
    //### DO STUFF WITH COLLECTED MESSAGE ###
    console.log(contactInfo);
  }

</script>

<!--### HEADER COMPONENT ###-->
<Header {...headerOptions} on:headerLinkClicked={({detail})=>{handleLinks(detail);}}/>

<main>
  <!--### CONTENTHOLDER COMPONENT ###-->
  <ContentHolder on:actionButtonClicked={({detail})=>{handleLinks(detail)}} on:messageSent={({detail})=>{sendContactMessage(detail)}} />
</main>

<!--### FOOTER COMPONENT ###-->
<Footer {...footerOptions} />

<style>

</style>
