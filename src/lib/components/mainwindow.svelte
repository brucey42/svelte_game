<script>
    import { gameState } from "../js/scripts/store";

    let uppertext;
    let lowertext;
    let css;

    gameState.subscribe(value => {
        uppertext = value?.narr?.text ?? ``;
        lowertext = value?.narr?.choices ?? ``;
        css = value?.narr?.css
    })
</script>

<div id="mainwin" class="mainwin">
    <div role="dialog" id="upperwindow" class="{css}" on:click on:keyup>
        {@html uppertext}
    </div>
    <div id="lowerwindow" class="lowerwindow">
        {@html lowertext}
    </div>
</div>

<style>
    .mainwin {
        border-style: solid;
        border-color: black;
        border-width: 1%;
        padding: 0.5%;
        height: 73%;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3%;
        background-color: rgb(0, 0, 0, 0.65);
        color: cyan;
        font-size: 2.0em;
        box-sizing: border-box;
    }
    .lowerwindow {
        border-style: solid;
        border-color: white;
        height: 27%;
        display: flex;
        padding-left: 5%;
        align-items: center;
        font-size: 1.25em;
        color: wheat;
        overflow: auto;
        font-size: 0.70em;
        box-sizing: border-box;
        overflow: auto;
    }
    .startscreen {
        border-style: solid;
        border-color: lightgreen;
        height: 70%;
        margin-bottom: 1%;
        overflow: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 5%;
        padding-right: 5%;
        font-weight: bold;
        font-size: 2.5em;
        box-sizing: border-box;
        overflow: auto;
    }
    .mmenu {
        border-style: solid;
        border-color: lightgreen;
        height: 70%;
        margin-bottom: 1%;
        overflow: auto;
        display: flex;
        align-items: center;
        padding-left: 5%;
        padding-right: 5%;
        font-weight: bold;
        font-size: 2.0em;
        justify-content:center;
        flex-direction: column;
        box-sizing: border-box;
        overflow: auto;
    }
    .narr {
        border-style: solid;
        border-color: cyan;
        color: white;
        height: 70%;
        margin-bottom: 1%;
        overflow: auto;
        display: flex;
        align-items: center;
        padding-left: 5%;
        padding-right: 5%;
        font-weight: light;
        font-size: inherit;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
        overflow: auto;
    }
    .chargen {
        border-style: double;
        border-color: cyan;
        color: white;
        height: 70%;
        margin-bottom: 1%;
        overflow: auto;
        display: flex;
        align-items: center;
        padding-left: 5%;
        padding-right: 5%;
        font-weight: light;
        font-size: 2em;
        justify-content: center;
        flex-direction: column;
        box-sizing: border-box;
        overflow: auto;
    }
</style>