<script>
    import Mainwindow from "./mainwindow.svelte";
    import { playState,gameState } from '../js/scripts/store';
    
    import { onMount } from "svelte";
    import { reset,cheeky } from "../js/scripts/little_calls";
    import { checking } from "../js/scripts/check";
    import { rltns } from "../js/scripts/rltns";

    import { narrs } from '../js/narrs/narrs';

    let playerin;

    let input;
    let spare;

    gameState.subscribe(value => input = value);

    const choose = (choice) => {
        ((thing) => {
            thing.ask = choice;
            const out = thing.narr[`out${choice}`] ?? ``;
            switch(choice){
                default:
                    switch(out){
                        case ``:
                            input.narr.text = cheeky(spare);
                            gameState.set(input);
                            break;
                        default:
                            input = checking(input);
                            input = rltns(input);
                            input.narr = narrs(out.loc,out.out,input.party);
                            gameState.set(input);
                            spare = input.narr.text;
                            break;
                    }
            }
        })(input);
        reset(`mainin`);
    };
    
    const click_check = () => {
        switch(input?.narr?.click){
            case `start`:
                choose(``);
                playState.set(true);
                document.getElementById(`mainin`).focus();
                return(true);
            default:
                return(false);
        }
    };

    onMount(() => {
        switch(input){
            case null:
                gameState.set({
                    narr:narrs(`start`)
                })
                document.getElementById(`mainin`).focus();
                break;
        }
    });
</script>

<Mainwindow on:click={click_check} on:keyup={key => key.toLowerCase() == `enter` ? click_check() : ``} />

<div
    id="inputBox"
    class="inputBox">
    <div
    id="inputText"
    class="inputText">
        Input:
    </div>
    <input
    id="mainin"
    type="text"
    bind:value={playerin}
    on:keyup={
        (key) => key.key.toLowerCase() == `enter` ? 
        click_check() ? `` : choose(playerin?.toLowerCase() ?? ``) : ``
        } />
    <button
    id="playersub"
    class="playersub"
    type="submit"
    on:click={() => {
        click_check() ? `` : choose(playerin?.toLowerCase() ?? ``)
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
        width: 5%;
        height: inherit;
        float: left;
        font-size: 1em;
        display: flex;
        align-items: center;
        padding-left: 0.4%;
        box-sizing: border-box;
    }
    input[type=text] {
        background-color: black;
        border-style: solid;
        border-color: white;
        border-width: 1%;
        width: 89%;
        height: 108%;
        color: white;
        font-size: inherit;
        float: left;
        box-sizing: border-box;
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