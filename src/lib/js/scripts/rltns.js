export const rltns = (input) => {
    const narr = input.narr[`out${input.ask}`];
    const rltns = input.party?.mainchar?.rltns;
    Object.entries(narr?.rltns ?? {}).forEach(([ppl,obj]) => {
        Object.entries(obj).forEach(([scn,scr]) => {
            ppl in rltns ? rltns[ppl][scn] = scr : rltns[ppl] = {[scn]:scr};
        });
    });
    return(input);
};

export const undo = (input) => {
    const narr = input.narr[`out${input.ask}`];
    const rltns = input.party.mainchar.rltns;
    Object.entries(narr.rltns ?? {}).forEach(([ppl,obj]) => {
        Object.keys(obj).forEach(scn => {
            delete rltns[ppl][scn];
            Object.keys(rltns[ppl]).length == 0 ? delete rltns[ppl] : ``;
        });
    });
    return(input);
}