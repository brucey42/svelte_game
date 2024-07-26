<script>
    import { onMount } from "svelte";
    import { cycle } from '../lib/js/scripts/mainjs';
    import { reset } from '../lib/js/scripts/little_calls';
    import { menu } from '../lib/js/narrs/mmenu';

    import Musicplayer from "../lib/components/musicplayer.svelte";
    import Mainwindow from "../lib/components/mainwindow.svelte";
    import Playerinput from "../lib/components/playerinput.svelte";
   
    let input = {
        narr:menu
    };
    let wintext = ``;
    let lowtext = ``;
    let playerin = ``;
    let playstate;

    const set = (feed) => {
        wintext = feed.narr.text;
        lowtext = feed.narr.choices ?? ``;
    }

    const choose = (choice) => {
        input = cycle(input,choice);
        set(input);
    }

    onMount(() => {
        const storage = JSON.parse(sessionStorage.getItem(`input`));
        switch(storage){
            case null:
                input = {
                    narr:menu
                };
                choose();
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

<div class ="body">
    <slot />
    <nav>
        <a href="/" on:click={() => {
            sessionStorage.removeItem(`input`);
            input = {
                narr:menu
            };
            choose();
        }}>&nbsp;&nbsp;Main Menu&nbsp;&nbsp;</a>
        |
        <a href="/">&nbsp;&nbsp;Game&nbsp;&nbsp;</a>
        |
        <a href="/char" on:click={() => {
            sessionStorage.setItem(`input`,JSON.stringify(input));
        }}>&nbsp;&nbsp;Character&nbsp;&nbsp;</a>  
    </nav>

    <Mainwindow {playerin} />
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
        <input id="mainin" type="text"
        bind:value={playerin}
        on:keyup={e => {e.key.toLowerCase() == `enter` ? (() => {
            choose(playerin);
            reset('mainin');
            })() : ``}} />
        <button id="playersub" class="playersub" type="submit" on:click={() => {
            choose(playerin.toLowerCase());
            reset('mainin');
        }}>
        <h1>Submit</h1>
        </button>
    </div>
        <Musicplayer
        src = {input.narr.music}
        {playstate}
        />
</div>