export const newparty = (input) => {
    input.party = {
        mainchar:{
            rltns:{}
        }
    };
    return(input);
};

export const add = (input) => {
    let ref = input;
    const what = input.narr.what;
    Object.keys(what).forEach(thing => {
        let split = what[thing].split(`.`);
        split.forEach(ii => {
            ii in ref ? `` : ref[ii] = {};
            ref = ref[ii];
        });
        ref[thing] = input.hold;
    });
    delete input.hold;
    input.spare = input.text;
    return(input);
};

const name = (words) => {
    return(`Please enter your ${words} name:`)
}

export const stat = (party,char) => {
    char = party?.[char] ?? {};
    let out = `<p>Please wildly exaggerate your abilities:<br><br>Current:</p><p>`;
    const stats = {
        str:`Strength`,
        chr:`Charisma`,
        end:`Endurance`,
        int:`Intelligence`,
        sbn:`Stubbornness`,
        wis:`Wisdom`,
        agl:`Agility`,
        fcs:`Focus`,
        dex:`Dexterity`,
        per:`Perception`,
        grc:`Grace`,
        lck:`Luck`
    };
    Object.keys(stats).forEach((ii,i) => {
        `stats` in char ? ii in char.stats ? `` : char.stats[ii] = 1 : char.stats = {[ii]:1,
            points:35
        };
        switch(`${(i/2).toFixed(1)}`.split(`.`)[1]){
            case 0:
                out += `${stats[key]} (${key}):&nbsp;&nbsp;${char.stats[key]}&nbsp;&nbsp;&nbsp;&nbsp;`
                break
            case 5:
                out += `${stats[key]} (${key}):&nbsp;&nbsp;${char.stats[key]}<br>`
                break;
        }
    });
    out + `</p><br><p>Remaining:&nbsp;&nbsp;${char.stats.points}</p>`
    return(out);
};

export const mainchargen = (out,party) => {
    const outs = {
        first:{
            text:name(`first`),
            out:{
                check:{
                    type:`in`,
                    is:false,
                    func:`add`,
                    param:{
                        fname:`mainchar.profile`
                    }
                },
                loc:`mainchargen`,
                out:`last`
            },
            what:{
                fname:`party.mainchar.profile`
            },
            css:`chargen`,
            click:`chargen`,
            rep:{
                loc:`mainchargen`,
                out:`first`
            }
        },
        last:{
            text:name(`last`),
            out:{
                check:{
                    type:`in`,
                    is:false,
                    func:`add`,
                    param:{
                        lname:`mainchar.profile`
                    }
                },
                loc:`intro`,
                out:`bedroom_char`
            },
            what:{
                lname:`party.mainchar.profile`
            },
            css:`chargen`,
            click:`chargen`
        },
        statgen:{
            text:stat(party,`mainchar`),
            out:{
                check:{
                    sb:`stat`,
                    param:{
                        points:0
                    },
                    specs:{
                        true:{

                        },
                    }
                }
            },
            css:`chargen`,
            click:`chargen`
        }
    }
    return(outs[out])
}