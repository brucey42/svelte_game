<script>
    import { onMount } from "svelte";

    export const name = `MusicPlayer`;
    export let src;
    export let playstate;

    let audio;
</script>

<button class="player" on:click={() => {
    if(playstate){
        playstate = false;
        audio.pause();
    }
    else{
        playstate = true;
        audio.play();
    }
}}>
Toggle Music
</button>

<audio bind:this = {audio} {src} autoplay loop />

<style>
    button {
        margin-top: 2%;
        float: right;
        width: 3%;
        height: 3%;
        background-color: darkgreen;
    }
</style>