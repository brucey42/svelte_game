import { start } from './mmenu';
import { mmenu } from './mmenu';
import { intro } from './intro';

export const narrs = (loc,out,party) => {
    const convert = {
        start:start,
        mmenu:mmenu,
        intro:intro(out,party)
    };
    return(convert[loc]);
}