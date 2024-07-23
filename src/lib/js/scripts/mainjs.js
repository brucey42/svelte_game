import { narrs } from "../narrs/narrs";
import { checking } from "./check";
import { rltns } from "./rltns";

export const cycle = (input,choice) => {
    input.ask = choice;
    const out = input.narr[`out${choice}`] ?? ``;
    switch(choice){
        case undefined:
        case null:
            break;
        default:
            switch(out){
                case ``:
                    input.narr.text = cheeky(input.narr.text);
                    break;
                default:
                    checking(input);
                    rltns(input);
                    input.narr = narrs[out.loc]?.[out.out] ?? `error`;
                    break;
            }
            break;
    }
    return(input);
};