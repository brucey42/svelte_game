<script>
    import Mainwindow from "./mainwindow.svelte";
    import { musicStore } from '../js/scripts/store';
    import { playState } from "../js/scripts/store";

    import { onMount } from "svelte";
    import { cycle } from '../js/scripts/mainjs';
    import { reset } from "../js/scripts/little_calls";

    import { start } from "../js/narrs/mmenu";

    let playerin;

    let input = {
        narr:start
    };

    $: uppertext = input.narr.text;
    $: lowertext = input.narr.choices ?? ``;
    $: css = input.narr.css
    $: musicStore.set(input.narr.music);

    let musiccheck;
    
    playState.subscribe(value => musiccheck = value);

    const choose = (choice) => {
        choice = choice ?? ``;
        input = cycle(input,choice);
        reset(`mainin`);
    };
    
    const click_check = () => {
        switch(input.narr.check){
            case `start`:
                choose(``);
                playState.set(true);
                document.getElementById(`mainin`).focus();
                break;
        }
    };

    onMount(() => {
        const storage = JSON.parse(sessionStorage.getItem(`input`));
        switch(storage){
            case null:
            document.getElementById(`mainin`).focus();
        }
    });
</script>

<Mainwindow {uppertext} {lowertext} {css} on:click={click_check} />

<div id="inputBox" class="inputBox">
    <div id="inputText" class="inputText">
        Your Input:
    </div>
    <input id="mainin" type="text"
    bind:value={playerin}
    on:keyup={
        (key) => key.key.toLowerCase() == `enter` ? (() => {
            choose(playerin?.toLowerCase() ?? ``);
        })() : ``} />
    <button id="playersub" class="playersub" type="submit" on:click={() => {
        choose(playerin?.toLowerCase() ?? ``);
        reset(`mainin`);
    }}>
        Submit
    </button>
</div>

<style>
    .inputBox {
        display: flex;
        align-items: center;
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
        display: flex;
        align-items: center;
        padding-left: 0.45%;
    }
    input[type=text] {
        background-color: black;
        border-width: 1%;
        border-style: solid;
        border-color: white;
        width: 86%;
        height: 90%;
        color: white;
        font-size: inherit;
        float: left;
    }
    button[type=submit] {
        vertical-align: middle;
        background-color: red;
        width: 6.4%;
        height: 100%;
        color: black;
        font-size: inherit;
        font-weight: bold;
    }
</style>