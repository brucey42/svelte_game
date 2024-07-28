<script>
    import Mainwindow from "./mainwindow.svelte";

    import { reset } from "../js/scripts/little_calls";
    import { cycle } from "../js/scripts/mainjs";
    import { menu } from "../js/narrs/mmenu";
    import { onMount } from "svelte";

    const name = "PlayerInput";

    let input = {
        narr:menu
    }

    $: css = input?.narr?.css ?? `menu`;
    $: uppertext = input?.narr?.text ?? ``;
    $: lowertext = input?.narr?.choices ?? ``;

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
                set(input)
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
    bind:value={playerin}
    on:keyup={
        e => e.key.toLowerCase() == `enter` ? (() => {
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