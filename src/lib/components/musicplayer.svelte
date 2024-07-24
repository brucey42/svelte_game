<script>
    export const name = `MusicPlayer`;
    export let src;

    export const toggle_music_play = (bool) => {
        bool ? `` : ``;
    }

</script>

<audio
autoplay
controls
loop>
<source {src}>
</audio>

<style>
    audio {
        display: none;
    }
</style>