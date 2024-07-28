<script>
    import Musicplayer from "../lib/components/musicplayer.svelte";
    import Playerinput from "../lib/components/playerinput.svelte";
</script>

<div class ="body">
    <slot />
    <nav>
        <a href="/">&nbsp;&nbsp;Main Menu&nbsp;&nbsp;</a>
        |
        <a href="/">&nbsp;&nbsp;Game&nbsp;&nbsp;</a>
        |
        <a href="/char">&nbsp;&nbsp;Character&nbsp;&nbsp;</a>  
    </nav>

    <Playerinput />
    <Musicplayer />
</div>