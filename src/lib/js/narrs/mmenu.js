export const menu = {
    text:`Please enter:<br><br>
    n) New Game<br>
    c) Continue<br>`,
    outn:{
        check:{
            sb:`short`,
            type:`in`,
            is:false,
            func:`newparty`,
            param:{
                party:`input`
            }
        },
        loc:`intro`,
        out:`intro`
    },
    css:`mmenu`,
    music:"src/lib/music/edgar_hopp-gravitated_(royalty_free_music).mp3"
};