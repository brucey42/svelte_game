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

export const mainchargen = (out) => {
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
        }
    }
    return(outs[out])
}