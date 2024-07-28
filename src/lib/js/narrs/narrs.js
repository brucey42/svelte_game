import { intro } from './intro';

export const narrs = (loc,out,party) => {
    const convert = {
        intro:intro(out,party)
    };
    return(convert[loc]);
}