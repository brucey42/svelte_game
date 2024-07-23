import { funcs } from "./little_calls";

export const checking = (input) => {
    const narr = input.narr[`out${input.ask}`];
    switch(`check` in narr){
        case true:
            const check = narr.check;
            switch(check.type){
                case `in`:
                    Object.entries(check.param).forEach(([quid,quo]) => {
                        let bool = false;
                        switch(check.sb){
                            case `short`:
                                switch(quid in [quo]){
                                    case check.is:
                                        bool = true;
                                        break;
                                }
                                break;
                            default:
                                switch(quid in input[check.loc ?? `party`][quo]){
                                    case check.is:
                                        bool = true;
                                        break;
                                }
                                break;
                        }
                        switch(bool){
                            case true:
                                funcs[check.func](input);
                                check.checks?.forEach(item => `scheck` in narr ? narr.scheck.push(item) : narr.scheck = [item]);
                                break;
                        }
                    });
                    break;
                case `rec`:
                    break;
                default:
                    cn(input);
                    break;
            }
            switch(`scheck` in narr){
                case true:
                    narr.check = narr.scheck;
                    delete narr.scheck;
                    checking(input);
                    break
            }
            delete narr.schecks;
            break;
    }
    return(input);
}

const cn = (input) => {
    const narr = input.narr[`out${input.ask}`];
    const check = narr.check;
    const param = check.param;
    const op = check.op ?? `>`;
    Object.entries(param).forEach(([quid,quo]) => {
        const prefix = check.specs;
        let specs = ``;
        switch(check.sb){
            case `stat`:
                specs = prefix[input.party[quid].stats[check.stat] [Number(op)] [Number(quo)]];
                break;
            default:
                let thing = input[check.loc ?? `party`][quo];
                thing = check.sub == `` ? thing : thing[check.sub ?? `rltns`];
                thing = `end` in check ? thing[check.end] : thing;
                specs = prefix[quid in thing];
                break;
        }
        switch(`check` in specs){
            case false:
                narr.loc = specs.loc ?? narr.loc;
                narr.out = specs.out ?? narr.out;
                break;
            default:
                `scheck` in narr ? narr.scheck.push(specs.check) : narr.scheck = specs.check;
                break;
        }
        switch(`rltns` in specs){
            case true:
                switch(`rltns` in narr){
                    case true:
                        switch(typeof(specs.rltns)){
                            case `object`:
                                switch(specs.op){
                                    case `mrg`:
                                        narr.rltns = {
                                            ...narr.rltns,
                                            ...specs.rltns
                                        };
                                        break;
                                    default:
                                        narr.rltns = specs.rltns;
                                        break;
                                }
                                break;
                            case `string`:
                                switch(specs.rltns){
                                    case ``:
                                        delete narr.rltns;
                                        break;
                                }
                                break;
                        }
                        break;
                    default:
                        narr.rltns = specs.rltns;
                        break;
                }
                break;
        }
    });
    return(input);
};