<script>
    import { cycle } from '../js/scripts/mainjs';
    import { menu } from '../js/narrs/mmenu';
    import { onMount } from 'svelte';

    const name = "MainWindow";
    let uppertext = ``;
    let lowertext = ``;

    export let playerin = ``;
    let input = {
        narr:menu
    };
    const set = (feed) => {
        uppertext = feed.narr.text;
        lowertext = feed.narr.choices ?? ``;
    };
    const choose = (choice) => {
        input = cycle(input,choice);
        set(input);
    };

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

<div id="mainwin" class="mainwin">
    <div id="upperwindow" class="{input.narr.css}">
        <h1>{@html uppertext}</h1>
    </div>
    <div id="lowerwindow" class="lowerwindow">
        {@html lowertext}
    </div>
</div>

<style>
    .mainwin {
        border-style: solid;
        border-color: black;
        border-width: 3px;
        padding: 10px;
        height: 73%;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3%;
        background-color: rgb(0, 0, 0, 0.65);
        color: cyan;
    }
    .lowerwindow {
        border-style: solid;
        border-color: white;
        height: 20%;
        overflow: auto;
        display: flex;
        padding-left: 5%;
        align-items: center;
        font-size: 1.5em;
        color: wheat;
    }
    .mmenu {
        border-style: solid;
        border-color: white;
        height: 75%;
        margin-bottom: 1%;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 5%;
        padding-right: 5%;
    }
    .narr {
        border-style: solid;
        border-color: white;
        height: 75%;
        margin-bottom: 1%;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 5%;
        padding-right: 5%;
    }
</style>