<script>
  export let title, author, level, words;
  import { styles } from "./styles.js";
</script>


<section class={$styles.a_content}>
  
    <h1 class={$styles.h1}>{title}</h1>
    <div class={$styles.sub}>
      <div>{author}</div>
      <div class="flex items-center space-x-2">
        <div>
          <!-- clock icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>{$styles.readtime(words)}</div>
      </div>
      <div class="flex space-x-2 {$styles.difficulty[level]}">
        <div class="font-black">•</div>
        <div> {$styles.diffPhrase[level]} </div>
      </div>
    </div>
    
  </section>