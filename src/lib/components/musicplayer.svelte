<script>
    export const name = `MusicPlayer`;
    export let src;
    const player = document.getElementById("audioplayer");
    export const toggle_music_state = (newstate) => {
        if(newstate){
            player.play();
        }else{
            player.pause
        }
    }
</script>

<audio 
id="audiplayer"
autoplay
loop>
<source {src}>
</audio>

<style>
    audio {
        display: none;
    }
</style>