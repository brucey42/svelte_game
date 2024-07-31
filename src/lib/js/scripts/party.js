export const newparty = (input) => {
    input.party = {
        mainchar:{
            rltns:{}
        }
    };
    return(input);
};

export const add = (input) => {
    switch(input.hold.length){
        case 0:
            input.text = `I would imagine you've got a name - ${input.spare}`,
            input.out.out = input.rep.out,
            input.out.loc = input.rep.loc
            break;
        default:
            let ref = input;
            const what = input.narr.what;
            Object.keys(what).forEach(thing => {
                let split = what[thing].split(`,`);
                split.forEach((ii) => {
                    switch(ii in ref){
                        case false:
                            ref[ii] = {};
                        default:
                            ref = ref[ii];
                            break;
                    }
                });
                ref[thing] = input.hold;
            });
            delete input.hold;
            input.spare = input.text;
        }
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