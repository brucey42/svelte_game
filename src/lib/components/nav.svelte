<script>
    import { gameState } from "../js/scripts/store";
    import { narrs } from "../js/narrs/narrs";

    let state;

    gameState.subscribe(value => state = value);
</script>

<nav>
    <a href="/" on:click={() => {
        switch(state){
            case null:
                break;
            default:
                gameState.set({
                    narr:narrs(`mmenu`)
                });
                break;
        }
    }}>&nbsp;&nbsp;Main Menu&nbsp;&nbsp;</a>
    |
    <a href="/">&nbsp;&nbsp;Game&nbsp;&nbsp;</a>
    |
    <a href="/char">&nbsp;&nbsp;Character&nbsp;&nbsp;</a>
</nav>

<style>
    nav {
        display: flex;
        font-size: 2em;
        border-style: solid;
        border-color: black;
        border-width: 1px;
        align-items: center;
        margin-bottom: 2.0%;
        word-spacing: 0.25em;
        justify-content: center;
        color: black;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
</style>