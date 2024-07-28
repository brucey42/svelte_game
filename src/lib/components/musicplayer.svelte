<script>
    export const name = `MusicPlayer`;
    
    import { musicStore } from "../js/scripts/store";
    import { playState } from "../js/scripts/store";

    let src;
    let playing;

    musicStore.subscribe(value => src = value);
    playState.subscribe(value => playing = value);

    $: (() => {
        if(src){
            if(playing){
                audio?.play();
            }
            else{
                audio?.pause();
            }
        }
    })();

    let audio;

</script>

<button class="player" on:click={() => {
    playing ? playState.set(false) : playState.set(true);
}}>
Toggle Music
</button>

<audio
bind:this = {audio}
{src}
autoplay
loop
/>

<style>
    button {
        margin-top: 2%;
        float: right;
        width: 3%;
        height: 3%;
        background-color: darkgreen;
    }
</style>