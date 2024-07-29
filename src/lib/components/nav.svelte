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