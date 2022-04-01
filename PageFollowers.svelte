<script>
  import { Router, Route, Link } from "svelte-navigator";
  import PageHeader from "./PageHeader.svelte";
  import { styles } from "./styles.js";
  import { toc } from "./toc.js";
  import { onMount } from "svelte";
  import "@lottiefiles/lottie-player";
  import { create } from "@lottiefiles/lottie-interactivity";

  let page = toc[8];

  function handleLoad(event) {
    create({
      mode: "scroll",
      player: "#graphic1",
      actions: [
        {
          visibility: [0.45, 0.7],
          type: "seek",
          frames: [0, 120]
        }
      ]
    });

    create({
      mode: "scroll",
      player: "#graphic2",
      actions: [
        {
          visibility: [0.4, 0.8],
          type: "seek",
          frames: [0, 60]
        }
      ]
    });

    // Judas
    create({
      mode: "scroll",
      player: "#graphic3",
      actions: [
        {
          visibility: [0.3, 0.5],
          type: "seek",
          frames: [0, 45]
        },
        {
          visibility: [0.5, 1],
          type: "loop",
          frames: [45, 170]
        }
      ]
    });

    // Nicodemus
    create({
      mode: "scroll",
      player: "#graphic4",
      actions: [
        {
          visibility: [0.3, 0.5],
          type: "seek",
          frames: [0, 20]
        },
        {
          visibility: [0.5, 1],
          type: "loop",
          frames: [20, 135]
        }
      ]
    });
  }
</script>

<style>
</style>

<div class="container mx-auto mt-2 md:fixed md:left-4">
  <Link class="block w-16 py-2 px-4 rounded-lg hover:bg-slate-800" to="/">
    <img src="assets/logo-small.png" width="32" alt="logo">
  </Link>
</div>

<!-- All styles are defined under styles.js -->

<div class={$styles.container}>

  <PageHeader title={page.title} author={page.author} level={page.level} words={page.words} />

  <section class={$styles.b_content}>
    <!-- graphic -->
    <lottie-player id="graphic1"
              src="pages/followers/09-01-main.json"
              class={$styles.image}
              on:load={handleLoad}>
    </lottie-player>
  </section>

  <section class={$styles.a_content}>
    <p class={$styles.p}>It is well known that Christ consistently used the expression “follower.” He never asks for admirers, worshippers, or adherents. No, he calls disciples. It is not adherents of a teaching but followers of a life Christ is looking for.</p>
    <p class={$styles.p}>Christ understood that being a “disciple” was in innermost and deepest harmony with what he said about himself. Christ claimed to be the way and the truth and the life (John 14:6). For this reason, he could never be satisfied with adherents who accepted his teaching – especially with those who in their lives ignored it or let things take their usual course. <strong class={$styles.strong}>His whole life on earth, from beginning to end, was destined solely to have followers and to make admirers impossible.</strong></p>  
  </section>

  <section class={$styles.b_content}>
    <!-- graphic -->
    <lottie-player id="graphic2"
              src="pages/followers/09-02-chart.json"
              class={$styles.image}
              on:load={handleLoad}>
    </lottie-player>
  </section>

  <section class={$styles.a_content}>
    <p class={$styles.p}>Christ came into the world with the purpose of saving, not instructing it. At the same time – as is implied in his saving work – he came to be the pattern, to leave footprints for the person who would join him, who would become a follower. <strong class={$styles.strong}>This is why Christ was born and lived and died in lowliness.</strong> It is absolutely impossible for anyone to sneak away from the Pattern with excuse and evasion on the basis that it, after all, possessed earthly and worldly advantages that he did not have. In that sense, to admire Christ is the false invention of a later age, aided by the presumption of “loftiness.” No, there is absolutely nothing to admire in Jesus, unless you want to admire poverty, misery, and contempt. </p>
  </section>

  <section class={$styles.a_content}>
    <h2 class={$styles.h2}>Difference Between an Admirer and a Follower</h2>
    <p class={$styles.p}>What then, is the difference between an admirer and a follower? <strong class={$styles.strong}>A follower is, or strives to be, what he admires.</strong>  An admirer, however, keeps himself personally detached. He fails to see that what is admired involves a claim upon him, and thus he fails to be or strive to be what he admires.  </p>
    <p class={$styles.p}>To want to admire instead of to follow Christ is not necessarily an invention by bad people.  No, it is more an invention by those who spinelessly keep themselves detached, who keep themselves at a safe distance.  Admirers are related to the admired only through the excitement of the imagination.  To them, he is like an actor on the stage except that, this being real life, the effect he produces is somewhat stronger.  But for their part, admirers make the same demands that are made in the theater: to sit safe and calm.  Admirers are only all too willing to serve Christ as long as proper caution is exercised, lest one personally come in contact with danger. They refuse to accept that Christ’s life is a demand. In actual fact, they are offended by him. His radical, bizarre character so offends them that when they honestly see Christ for who he is, they are no longer able to experience the tranquility they so much seek after. They know full well that to associate with him too closely amounts to being up for examination. Even though he says nothing against them personally, they know that his life tacitly judges theirs.</p>  
    <blockquote class={$styles.quote}>Admirers are only all too willing to serve Christ as long as proper caution is exercised, lest one personally come in contact with danger.  As such, they refuse to accept that Christ’s life is a demand.</blockquote>
    <p class={$styles.p}>And Christ’s life indeed makes it manifest, terrifyingly manifest, what dreadful untruth it is to admire the truth instead of following it. When there is no danger, when there is a dead calm, when everything is favorable to our Christianity, it is all too easy to confuse an admirer with a follower. And this can happen very quietly. The admirer can be in the delusion that the position he takes is the true one, when all he is doing is playing it safe. Give heed, therefore, to the call of discipleship!</p>
  
    <h2 class={$styles.h2}>Judas the Admirer</h2>
    <p class={$styles.p}>If you have any knowledge at all of human nature, who can doubt that Judas was an admirer of Christ! And we know that Christ at the beginning of his work had many admirers. Judas was precisely an admirer and thus later became a traitor. It is not hard to imagine that those who only admire the truth will, when danger appears, become traitors.</p> 
    <!-- graphic -->
    <lottie-player id="graphic3"
              src="pages/followers/09-03-judas.json"
              class={$styles.image}
              on:load={handleLoad}>
    </lottie-player>
    
    <p class={$styles.p}><strong class={$styles.strong}>The admirer is infatuated with the false security of greatness; but if there is any inconvenience or trouble, he pulls back.</strong> Admiring the truth, instead of following it, is just as dubious a fire as the fire of erotic love, which at the turn of the hand can be changed into exactly the opposite, to hate, jealousy, and revenge.</p>

    <h2 class={$styles.h2}>Niodemus the Admirer</h2>
    <p class={$styles.p}>There is a story of yet another admirer – it was Nicodemus. Despite the risk to his reputation, despite the effort on his part, Nicodemus was only an admirer; he never became a follower. It is as if he might have said to Christ, “If we are able to reach a compromise, you and I, then I will accept your teaching in eternity. But here in this world, no, I cannot. Could you not make an exception for me? Would it not be enough if once in a while, at great risk to myself, I come to you during the night, but during the day (yes, I confess it, I feel how humiliating this is for me and how disgraceful, indeed also how very insulting it is toward you) to say “I do not know you?” See in what a web of untruth an admirer can entangle himself!</p>
    <!-- graphic -->
    <lottie-player id="graphic4"
              src="pages/followers/09-04-nic.json"
              class={$styles.image}
              on:load={handleLoad}>
    </lottie-player>
    <p class={$styles.p}>Nicodemus, I am quite sure, was certainly well-meaning. I’m also sure he was ready in the strongest phrases to attest that he accepted the truth of Christ’s teaching. Yet, is it not true that the more strongly someone makes assurances, while his life still remains unchanged, the more he is only making a fool of himself? If Christ had permitted a cheaper edition of being a follower — an admirer who swears by all that is high and holy that he is convinced — then Nicodemus might very well have been accepted. But he was not!</p>

    <h2 class={$styles.h2}>The Admirer Plays it Safe</h2>
    <p class={$styles.p}>Now suppose that there is no longer any special danger, as it no doubt is in so many of our Christian countries, bound up with publicly confessing Christ. Suppose there is no longer need to journey in the night. The difference between following and admiring still remains. Forget about danger connected with confessing Christ and think rather of the real danger which is inescapably bound up with being a Christian. Does not the Way — Christ’s requirement to die to the world and deny self — does this not contain enough danger? </p>
    <blockquote class={$styles.quote}>The follower aspires with all his strength, with all his will to be what he admires.</blockquote>
    <p class={$styles.p}>The admirer never makes any true sacrifices. He always plays it safe. Though in word he is inexhaustible about how highly he prizes Christ, he renounces nothing, will not reconstruct his life, and will not let his life express what it is he supposedly admires. Not so for the follower. No, no. The follower aspires with all his strength to be what he admires. And then, remarkably enough, even though he is living amongst a “Christian people,” he incurs the same peril as he did when it was dangerous to openly confess Christ. And because of the follower’s life, it will become evident who the admirers are, for the admirers will become agitated with him. Even these words will disturb many — but then they must likewise belong to the admirers.</p>  
    
    
  </section>

</div> <!-- /.container -->
