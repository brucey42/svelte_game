<script>
    import { gameState,playState } from "../js/scripts/store";

    let music;
    let src;
    let playing;
    let audio;

    gameState.subscribe(value => music = value);

    playState.subscribe(value => playing = value);

    $: {
        src = music?.narr?.music?.track;
        (async () => {
            await audio?.load;
            playing ? audio?.play() : audio?.pause();
        })();
    } 
    $: if(audio){
        audio.volume = music?.narr?.music?.volume ?? 1;
    }
</script>

<audio
bind:this = {audio}
{src}
loop
/>