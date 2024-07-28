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
    let uppertext;
    let lowertext;
    let css;

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

    <Playerinput />
    <Musicplayer
    src = {input.narr.music}
    {playstate}
    />
</div>