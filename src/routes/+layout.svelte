<link rel="stylesheet" media="screen" href="/src/app.css">

<script>
    import Nav from "../lib/components/nav.svelte";
    import Musicplayer from "../lib/components/musicplayer.svelte";
    import Musicbutton from '../lib/components/musicbutton.svelte';
</script>

<div class="body">
    <Musicplayer />
    <Nav />
    <slot />
    <Musicbutton />
</div>