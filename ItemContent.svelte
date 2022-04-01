<!-- This is the CONTENT inside all Items -->
<script>
  export let index;
  import { Router, Route, Link, link } from "svelte-navigator";
  import { toc } from "./toc.js";
  import { styles } from "./styles.js";

  let item;
  item = toc[index];
</script>

<style>
</style>

<!-- look inside toc.js for all attributes -->

<!-- you might need some div "wrapper" around these elements -->
<div class= "flex flex-col p-6 h-full justify-between">
          <!-- Remind: Need to fix the title so that it cuts off at somepoint-->
          <div> <!-- top section -->
            <div class="text-xl font-bold"> {item.title}<br></div> <!--This is the item title-->
            <div class= "flex flex-row space-x-6"> <!--these are the clock, difficulty and time icons-->
              <div class="flex text-slate-200 items-center space-x-1.5"> <!-- clock and time-->
                <div> <!-- clock icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>{$styles.readtime(item.words)}</div> <!--time-->
              </div>
              <div class="flex space-x-1.5 {$styles.difficulty[item.level]}"> <!--difficulty-->
                <div class="font-black">•</div>
                <div>{$styles.diffPhrase[item.level]}</div>
              </div>
            </div>
          </div> <!-- end top section -->
        
        <div> <!-- bottom section -->
 
            {#if item.web} <!--This is the button for web link-->
              <!-- button -->
              <a class="bg-purple-600 text-white font-bold flex w-fit" href={item.web} use:link>
                Read on the Web
                <!-- right arrow -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            {/if}

            {#if item.pdf || item.pdf_dark}
            <div class="flex space-x-3 text-sm text-slate-400"> <!--This is for the pdf icon, light pdf and dark pdf-->

                <!-- PDF icon-->
                <svg class="mt-0.5" width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8V2.5C3 2.36739 3.05268 2.24021 3.14645 2.14645C3.24021 2.05268 3.36739 2 3.5 2H9.5L13 5.5V8" stroke="#94A3B8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.5 2V5.5H13" stroke="#94A3B8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M3 12.5H4C4.26522 12.5 4.51957 12.3946 4.70711 12.2071C4.89464 12.0196 5 11.7652 5 11.5C5 11.2348 4.89464 10.9804 4.70711 10.7929C4.51957 10.6054 4.26522 10.5 4 10.5H3V13.5" stroke="#94A3B8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.5 10.5H11.75V13.5" stroke="#94A3B8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M13.25 12.25H11.75" stroke="#94A3B8" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 13.5C8.39782 13.5 8.77936 13.342 9.06066 13.0607C9.34196 12.7794 9.5 12.3978 9.5 12C9.5 11.6022 9.34196 11.2206 9.06066 10.9393C8.77936 10.658 8.39782 10.5 8 10.5H7.125V13.5H8Z" stroke="#94A3B8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                {#if item.pdf}<a class="hover:underline" href="{item.pdf}">Light</a>{/if}
                {#if item.pdf_dark}<a class="hover:underline" href="{item.pdf_dark}">Dark</a>{/if}

            </div> <!-- end of the pdf section-->
            {/if}

        </div> <!-- end bottom section -->
</div>
    