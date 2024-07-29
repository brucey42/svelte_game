<script>
    import { playState } from "../js/scripts/store";
    let playing;
    playState.subscribe(value => playing = value);
</script>

<button class="player" on:click={() => {
    playing ? playState.set(false) : playState.set(true);
}}>
Toggle Music
</button>

<style>
    button {
        border-style: solid;
        border-color: darkgreen;
        margin-top: 2%;
        float: right;
        width: auto;
        height: 3%;
        background-color: darkolivegreen;
        box-sizing: border-box;
    }
</style>