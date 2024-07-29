<script>
    import { gameState,playState } from "../js/scripts/store";

    let music;
    let src;
    let playing;
    let audio;

    gameState.subscribe(value => music = value);

    playState.subscribe(value => playing = value);

    $: (async() => {
        src = music?.narr?.music?.track;
        await audio?.load;
        if(playing){
            audio?.play();
        }
    })();
    $: if(audio){
        audio.volume = music?.narr?.music?.volume ?? 1;
    }
    $: playing ? audio?.play() : audio?.pause();
</script>

<audio
bind:this = {audio}
{src}
loop
/>