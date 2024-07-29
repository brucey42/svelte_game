export const mmenu = {
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
    music:{
        track:"src/lib/music/edgar_hopp-gravitated_(royalty_free_music).mp3",
        volume:1
    }
};

export const start = {
    text:`Click to Start`,
    out:{
        loc:`mmenu`,
        out:`mmenu`
    },
    css:`startscreen`,
    click:`start`,
    music:{
        track:"src/lib/music/edgar_hopp-gravitated_(royalty_free_music).mp3",
        volume:1
    }
}