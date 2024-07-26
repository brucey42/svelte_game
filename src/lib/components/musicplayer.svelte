<script>
    import { onMount } from "svelte";

    export const name = `MusicPlayer`;
    export let src;
    export let playstate;
    $: ((thing) => {
        if(thing){
            audio?.play() ?? ``;
        }
        else{
            audio?.pause() ?? ``;
        }
    })(playstate);

    let audio;
    
    onMount(playstate = true)
</script>

<button class="player" on:click={() => {
    playstate = playstate ? false : true;
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