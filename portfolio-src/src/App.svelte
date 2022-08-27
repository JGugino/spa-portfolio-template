<script>
  import Header from "./lib/components/core/Header.svelte";
  import ContentHolder from "./lib/components/core/ContentHolder.svelte";
  import Footer from "./lib/components/core/Footer.svelte";

  import { headerOptions } from './options/header_options';
  import { footerOptions } from './options/footer_options';


  function handleLinks(linkHref){
    console.log(linkHref);
  }

</script>

<Header {...headerOptions} on:headerLinkClicked={({detail})=>{handleLinks(detail);}}/>

<main>
  <ContentHolder>

  </ContentHolder>
</main>

<Footer {...footerOptions} />

<style>

</style>
