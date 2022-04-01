<script>
  import SidebarFooter from "./SidebarFooter.svelte";
</script>

<style>
  /* iframe a {
                                                                                                                                                              display: none;
                                                                                                                                                            } */
</style>

<aside class="w-96">
  <div class="lg:w-80 lg:h-screen h-1/2 py-16 static lg:fixed flex flex-col justify-between">
      <!-- header -->
      <div class="">
        <h1 class="text-5xl font-extrabold w-full h-[288px] focus:outline-0 lg:text-left text-center">
          
          <div class="text-lg font-bold relative top-36 z-10">The Online</div>
          <strong class="relative top-36 z-10">Passion Reader</strong>
          <iframe title="logo" class="absolute top-4 z-0 h-[320px]" src='https://my.spline.design/passionreader-2dd17c69f8d352d9e0df43e7f915a6c5/' frameborder='0'></iframe>

        </h1>
       
        <p class="font-semibold text-slate-400 lg:text-left text-center">
          Articles to help you meditate on the events of Jesus' final week.
        </p>
        
      </div>
      
      <div class="lg:visible invisible">
        <SidebarFooter />
      </div>
      
  </div>

</aside>