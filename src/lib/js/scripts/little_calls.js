import { newparty } from "./party";
import { mainchargen } from "./party";
import { add } from "./party";

export const reset = (input) => {
    document.getElementById(`${input}`).value = ``;
};

export const cheeky = (input) => {
    const phrases = [
        `Try again`,
        `Nope`,
        `*Speaking slowly and clearly*`,
        `Come on, focus`,
        `It's not that hard`,
        `*Sigh*`
    ];
    return(`${phrases[Math.floor(Math.random()*phrases.length)]} - ${input}`);
};

export const funcs = {
    newparty:newparty,
    mainchargen:mainchargen,
    add:add
};