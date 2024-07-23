<script>
    import { onMount } from "svelte";
    import { cycle } from '../lib/js/scripts/mainjs';
    import { menu } from '../lib/js/narrs/mmenu';
    import { reset } from '../lib/js/scripts/little_calls';

    let input = {
        narr:menu
    };
    let wintext = ``;
    let lowtext = ``;
    let playerin;

    const set = (feed) => {
        wintext = feed.narr.text;
        lowtext = feed.narr.choices ?? ``;
    }

    export const choose = (choice) => {
        input = cycle(input,choice);
        set(input);
    }

    onMount(() => {
        const storage = JSON.parse(sessionStorage.getItem(`input`));
        switch(storage){
            case null:
                choose()
                break;
            default:
                input = storage;
                set(input)
                break;
        }
    })

</script>

<div id="main" class="main">
    <div id="upperwindow" class="{input.narr.css}">
        <h1>{@html wintext}</h1>
    </div>
    <div id="lowerwindow" class="bottom">
        {@html lowtext}
    </div>
</div>

<div id="inputBox " class="inputBox">
    <div id="inputText" class="inputText">
        Your Input:
    </div>
    <input id="mainin" type="text" bind:value={playerin} on:keyup={e => {e.key.toLowerCase() == `enter` ? (() => {
        choose(playerin);
        reset('mainin');
        })() : ``}}>
    <button id="playersub" class="playersub" type="submit" on:click={() => {
        choose(playerin.toLowerCase());
        reset('mainin');
    }}>
    <h1>Submit</h1>
    </button>
</div>