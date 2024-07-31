import { start } from './mmenu';
import { mmenu } from './mmenu';
import { intro } from './intro';
import { mainchargen } from '../scripts/party';

export const narrs = (loc,out,party) => {
    const convert = {
        start:start,
        mmenu:mmenu,
        mainchargen:mainchargen(out,party),
        intro:intro(out,party)
    };
    return(convert[loc]);
}