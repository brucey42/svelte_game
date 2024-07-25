<script>
    import { cycle } from '../js/scripts/mainjs';
    const name = "MainWindow";
    let uppertext = ``;
    let lowertext = ``;
    export let playerin = ``;
    export let input;
    const set = (feed) => {
        uppertext = feed.narr.text;
        lowertext = feed.narr.choices ?? ``;
    }
    const choose = (choice) => {
        input = cycle(input,choice);
        set(input);
    }
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
        columns: white;
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