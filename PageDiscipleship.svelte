<script>
  import { Router, Route, Link } from "svelte-navigator";
  import PageHeader from "./PageHeader.svelte";
  import { styles } from "./styles.js";
  import { toc } from "./toc.js";
  import { onMount } from "svelte";
  import "@lottiefiles/lottie-player";
  import { create } from "@lottiefiles/lottie-interactivity";

  let page = toc[9];
  let container = "";
  $: outerWidth = 0;

  function handleLoad(event) {
    container = outerWidth < 768 ? "#temp" : "#container";
    create({
      mode: "scroll",
      player: "#graphic1",
      container: container + "1",
      actions: [
        {
          visibility: [0.25, 0.4],
          type: "seek",
          frames: [0, 30]
        },
        {
          visibility: [0.4, 0.6],
          type: "seek",
          frames: [30, 240]
        },
        {
          visibility: [0.6, 0.75],
          type: "loop",
          frames: [240, 360]
        }
      ]
    });
  }
</script>

<!-- https://svelte.dev/repl/867c433fd36a463fa5bb257cec2c1766?version=3.35.0 -->
<svelte:window bind:outerWidth />

<div class="container mx-auto mt-2 md:fixed md:left-4">
  <Link class="block w-16 py-2 px-4 rounded-lg hover:bg-slate-800" to="/">
    <img src="assets/logo-small.png" width="32" alt="logo">
  </Link>
</div>

<!-- All styles are defined under styles.js -->

<div class={$styles.container}>

  <PageHeader title={page.title} author={page.author} level={page.level} words={page.words} />

  <section class={$styles.c_section} id="container1">
    <!-- graphic -->
    <div class={$styles.c_side}>
      <lottie-player id="graphic1"
              src="pages/discipleship/10-01-main.json"
              class="h-screen sticky top-0"
              on:load={handleLoad}>
      </lottie-player>
    </div>

    <div class={$styles.c_side}>
    <!-- need quote -->
      <p class={$styles.p}>Suffering and rejection are the summary expression of Jesus’ cross. Death on the cross means to suffer and to die as someone rejected and expelled. That it is Peter, the rock of the church, who incurs guilt here immediately after his own confession to Jesus Christ and after his appointment by Jesus, means that from its very inception the church itself has taken offense at the suffering Christ. It neither wants such a Lord nor does it, as the Church of Christ, want its Lord to force upon it the law of suffering.</p>
      <blockquote class={$styles.quote}>Just as Christ is Christ only in suffering and rejection, so also they are his disciples only in suffering and rejection, in being crucified along with Christ.</blockquote>
      <p class={$styles.p}>This makes it necessary for Jesus to relate clearly and unequivocally to his own disciples the “must” of suffering. Just as Christ is Christ only in suffering and rejection, so also they are his disciples only in suffering and rejection, in being crucified along with Christ. Discipleship as commitment to the person of Jesus Christ places the disciple under the law of Christ, that is, under the cross. </p>  
      <h2 class={$styles.h2}>Suffering in Self-Denial</h2>
      <p class={$styles.p}>“If anyone would come after me, he must deny himself.” Just as Peter, in denying Christ, said, “I do not know the man,” so also should each disciple say this to herself or himself. Self-denial can never be defined as some profusion ‒ be it ever so great ‒ of individual acts of self-torment or of asceticism. It is not suicide, since there, too, a person’s self-will can yet assert itself. <strong class={$styles.strong}>Self-denial means knowing only Christ, and no longer oneself. It means seeing only Christ, who goes ahead of us, and no longer the path that is too difficult for us. Again, self-denial is saying only: He goes ahead of us; hold fast to him.</strong></p>
      <p class={$styles.p}>The cross is not adversity, nor the harshness of fate, but suffering coming solely from our commitment to Jesus Christ. The suffering of the cross is not fortuitous, but necessary. The cross is not the suffering tied to natural existence, but the suffering tied to being Christians. The cross is never simply a matter of suffering, but a matter of suffering and rejection, and even, strictly speaking, rejection for the sake of Jesus Christ, not for the sake of some other arbitrary behavior or confession. The cross always simultaneously means rejection, and that the disgrace of suffering is part of the cross. Being expelled, despised, and abandoned by people in one’s suffering, as we find in the unending lament of the psalmist, is an essential feature of the suffering of the cross, yet one no longer comprehensible to a form of Christian life unable to distinguish between bourgeois and Christian existence.	</p>  
      <blockquote class={$styles.quote}>The cross is not the suffering tied to natural existence, but the suffering tied to being Christians.</blockquote>
      <p class={$styles.p}><strong class={$styles.strong}>The first suffering we must experience is the call sundering our ties to this world.</strong> This is the death of the old human being in the encounter with Jesus Christ. Whoever enters discipleship enters Jesus’ death, and puts his or her own life into death; this has been so from the beginning. The cross is not the horrible end of a pious, happy life, but stands rather at the beginning of community with Jesus Christ. Every call of Christ leads to death. Whether with the first disciples we leave home and occupation  in order to follow him, or whether with Luther we leave the monastery to enter a secular profession, in either case, the one death awaits us, namely, death in Jesus Christ, the dying away of our old form of being human in Jesus’ call.</p>
    </div>
    
  </section>

  <section class={$styles.c_section} id="container1">
    <!-- graphic -->
    <div class={$styles.c_side}>
      (graphic here)
    </div>

    <div class={$styles.c_side}>
      <h2 class={$styles.h2}>Suffering in Forgiving One Another</h2>
      <p class={$styles.p}>But there is yet another suffering and yet another disgrace that no Christian escapes. Only Christ’s own suffering is the suffering of reconciliation. Yet because Christ did suffer for the sake of the world’s sins, because the entire burden of sin fell upon him, and because Jesus Christ bequeaths to the disciples the fruit of his suffering ‒ because of all this, temptation and sin also fall upon the disciples. It covers them with pure shame, and expels them from the gates of the city like the scapegoat. Thus does the Christian come to bear sin and guilt for others. Individual Christians would collapse under the weight of this, were they not themselves born by him who bore all sins. In this way, however, they can, in the power of Christ’s own suffering, overcome all the sins that fall upon them by forgiving them. Thus do Christians become the bearers of burdens: “Bear one another’s burdens, and in this way you will fulfill the law of Christ” (Gal. 6:2).</p>
      <p class={$styles.p}>Just as Christ bears our burdens, so also are we to bear the burdens of our brothers and sisters. The law of Christ which must be fulfilled is the bearing of the cross. <strong class={$styles.strong}>The burden of my brother or sister that I am to bear is not only that person’s external fate, that person’s character and personality, but is in a very real sense that person’s sin.</strong> I cannot bear it except by forgiving it, in the power of the cross of Christ in which I, too, have a portion. Those who are not prepared to take up the cross, those who are not prepared to give their life to suffering and rejection by others, lose community with Christ, and are not disciples. Discipleship is a commitment to the suffering Christ. </p>  
      <h2 class={$styles.h2}>Can we love Jesus yet hate the cross?</h2>      
      <p class={$styles.p}>Whether we really have found God’s peace will be shown by how we deal with the sufferings that come upon us. There are many Christians who do, indeed, kneel before the cross of Jesus Christ, and yet reject and struggle against every tribulation in their own lives. They believe they love the cross of Christ, and yet they hate the cross in their own lives. And so in truth they hate the cross of Jesus Christ as well, and in truth despise that cross and try by any means possible to escape it. </p>
      <p class={$styles.p}>Those who acknowledge that they view suffering and tribulation in their own lives only as something hostile and evil can see from this very fact that they have not at all found peace with God.</p>  
      <p class={$styles.p}>They have basically merely sought peace with the world, believing possibly that by means of the cross of Jesus Christ they might best come to terms with themselves and with all their questions, and thus find inner peace of the soul. They have used the cross, but not loved it. They have sought peace for their own sake. But when tribulation comes, that peace quickly flees them. It was not peace with God, for they hated the tribulation God sends.</p>  
      <p class={$styles.p}>Thus those who merely hate tribulation, renunciation, distress, defamation, imprisonment in their own lives, no matter how grandiose they may otherwise speak about the cross, these people in reality hate the cross of Jesus and have not found peace with God. But those who love the cross of Jesus Christ, those who have genuinely found peace in it, now begin to love even the tribulations in their lives, and ultimately will be able to say with scripture, “We also boast in our sufferings.”</p>  
      
    </div>
    
  </section>
  

<!-- ..ended here.. -->


</div> <!-- /.container -->
