<script>
    import Mainwindow from "./mainwindow.svelte";

    import { musicStore } from '../js/scripts/store';
    import { playState } from "../js/scripts/store";
    import { reset } from "../js/scripts/little_calls";
    import { menu } from "../js/narrs/mmenu";
    import { onMount } from "svelte";
    import { cycle } from '../js/scripts/mainjs';

    const name = "PlayerInput";

    export let input = {
        narr:menu
    }

    $: css = input.narr.css;
    $: uppertext = input.narr.text;
    $: lowertext = input.narr.choices ?? ``;
    $: musicStore.set(input.narr.music);

    let musiccheck;
    
    playState.subscribe(value => musiccheck = value);


    const choose = (choice) => {
        cycle(input,choice);
        reset(`mainin`);
    }
    
    let playerin = null;

    onMount(() => {
        const storage = JSON.parse(sessionStorage?.getItem(`input`));
        switch(storage){
            case null:
                input = {
                    narr:menu
                };
                document.getElementById(`mainin`).focus();
                break;
            default:
                input = storage;
                document.getElementById(`mainin`).focus();
                break;
        };
    });

</script>

<Mainwindow {lowertext} {uppertext} {css} />

<div id="inputBox" class="inputBox">
    <div id="inputText" class="inputText">
        Your Input:
    </div>
    <input id="mainin" type="text"
    on:focus={() => {
        switch(musiccheck){
            case null:
                playState.set(true);
                break;
        }
    }}
    bind:value={playerin}
    on:keyup={
        (key) => key.key.toLowerCase() == `enter` ? (() => {
            choose(playerin.toLowerCase());
            reset(`mainin`);
        })() : ``} />
    <button id="playersub" class="playersub" type="submit" on:click={() => {
        choose(playerin.toLowerCase());
        reset(`mainin`);
    }}>
        <h1>Submit</h1>
    </button>
</div>

<style>
    .inputBox {
        border-style: double;
        background-color: black;
        color: white;
        height: 4%;
        width: 90%;
        font-size: 1.75em;
        margin-right: auto;
        margin-left: auto;
    }
    .inputText {
        width: 7%;
        height: inherit;
        float: left;
        font-size: inherit;        
    }
</style>