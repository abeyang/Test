<script>
  import { Router, Route, Link } from "svelte-navigator";
  import SidebarMain from "./SidebarMain.svelte";
  import SidebarFooter from "./SidebarFooter.svelte";
  import TestEthan from "./TestEthan.svelte";
  import TestTom from "./TestTom.svelte";
  import TestTinajero from "./TestTinajero.svelte";
  import TestDlee from "./TestDlee.svelte";
  import Item from "./Item.svelte";
  import PageFollowers from "./PageFollowers.svelte";
  import PageDiscipleship from "./PageDiscipleship.svelte";
  import { toc } from "./toc.js";
  import { styles } from "./styles.js";
  import _ from "underscore";

  let items,
    featured,
    updated,
    localpw,
    pw,
    newpw,
    access = false,
    errorpw = false;

  featured = _.where(toc, { featured: true });
  updated = _.where(toc, { featured: false, updated: true });
  items = _.where(toc, { featured: false, updated: false });

  function accept() {
    // check local storage first (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
    localpw = localStorage.getItem("hashpw");
    if (localpw) {
      if (localpw == $styles.login.hashpw) access = true;
    }
    // otherwise, if pw exists, check it with hash
    else if (pw) {
      newpw = btoa(pw);
      if (newpw != $styles.login.hashpw) errorpw = true;
      else {
        localStorage.setItem("hashpw", newpw);
        access = true;
      }

      // console.log(newpw + " / " + $styles.login.hashpw);
    }
  }

  accept(); // run this in beginning
</script>

<style>
  :global(html) {
    background-color: #0f172a;
  }
</style>

<body class="dark bg-slate-900">
<section class="bg-slate-900 text-slate-50 min-h-screen font-sans">

{#if $styles.login.dev || access}

  <Router>

  <!-- Root -->
  <Route path="/">
  <main class="container mx-auto flex lg:flex-row flex-col">
      <div class="grid lg:place-content-start place-content-center">
        <SidebarMain />
      </div>  

      <div class="grow lg:dark:bg-slate-800 m-8 lg:p-16 sm:px-14 rounded-lg max-w-4xl">
        <h2 class="text-3xl font-extrabold mb-8">Featured</h2>
        {#each featured as item}
          <Item index={item.index} />
        {/each}

        <div class="flex flex-wrap lg:grid lg:grid-cols-2 lg:gap-x-5">
          {#each updated as item}
            <Item index={item.index} />
          {/each}
        </div>

        <h2 class="text-3xl font-extrabold my-8">PDFs</h2>

        <div class="flex flex-wrap lg:grid lg:grid-cols-2 lg:gap-x-5">
          {#each items as item}
            <Item index={item.index} />
          {/each}
        </div>
        
        
      </div>

      <div class="lg:hidden grid place-content-center mb-9">
        <SidebarFooter />
      </div>

    </main>
  </Route>

  <Route path="followers-not-admirers">
    <PageFollowers />
  </Route>

  <Route path="discipleship-and-cross">
    <PageDiscipleship />
  </Route>

  <!-- Testing -->
  <Route path="ethan">
    <p><Link to="/">Go back!</Link></p>
    <TestEthan />
  </Route>

  <Route path="tom">
    <p><Link to="/">Go back!</Link></p>
    <TestTom />
  </Route>

  <Route path="dlee">
    <p><Link to="/">Go back!</Link></p>
    <TestDlee />
  </Route>

  <Route path="tinajero">
    <p><Link to="/">Go back!</Link></p>
    <TestTinajero />
  </Route>

  </Router>

{:else}
<section class="container mx-auto h-screen flex flex-col place-content-center">
  <div class="w-96 mx-auto bg-slate-800 rounded-xl p-8 text-center">
    <form on:submit|preventDefault={accept}>
      <h2 class="text-xl mb-12">Enter password</h2>
      <input class="rounded-lg bg-slate-600 text-lg focus:outline-none focus:ring-2 focus:ring-sky-500 p-2 w-full h-12 {errorpw ? 'border-2 border-rose-500' : ''}" type="password" bind:value={pw} />
      {#if errorpw}
        <p class="text-rose-500 my-3">Incorrect password</p>
      {/if}
      <button class="rounded-lg bg-purple-600 text-white font-bold p-2 w-full h-12 mt-6">Submit</button>
    </form>
  </div>
</section>


{/if}

</section>
</body>