<script>
    import { onMount } from 'svelte';
    export const name = `MusicPlayer`;
    let music;
    export let src;
    export let playstate = `paused`;
    const play = () => {
        playstate = playstate == `paused` ? `play` : `paused`;
    };
    onMount(() => {
        play();

        return () => {
            playstate = 'play' ? `paused` : playstate;
        };
    });
</script>

<audio 
controls={playstate}>
<source {src}>
</audio>