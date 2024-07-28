<script>
    export let uppertext;
    export let lowertext;
    export let css;

</script>

<div id="mainwin" class="mainwin">
    <div id="upperwindow" class="{css}" on:click>
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
        border-width: 3px;
        padding: 10px;
        height: 73%;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 3%;
        background-color: rgb(0, 0, 0, 0.65);
        color: cyan;
        font-size: 2.5em
    }
    .lowerwindow {
        border-style: solid;
        border-color: white;
        height: 27%;
        display: flex;
        padding-left: 5%;
        align-items: center;
        font-size: 1.5em;
        color: wheat;
        overflow: auto;
        font-size: 0.65em;
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
        font-size: 2em;
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
        font-size: inherit;
        justify-content:center;
        flex-direction: column;
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
    }
</style>