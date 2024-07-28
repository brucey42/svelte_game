import { narrs } from "../narrs/narrs";
import { checking } from "./check";
import { rltns } from "./rltns";
import { cheeky } from "./little_calls";
import { spareText } from "./store";

let text;

spareText.subscribe(value => text = value);

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
                    input.narr.text = cheeky(text);
                    break;
                default:
                    checking(input);
                    rltns(input);
                    input.narr = narrs(out.loc,out.out,input.party);
                    spareText.set(input.narr.text);
                    break;
            }
            break;
    }
    return(input);
};