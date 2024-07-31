import { writable } from "svelte/store";

export const musicStore = writable(null, () => {return});
export const playState = writable(null, () => {return});
export const gameState = writable(null, () => {return});
export const functionState = writable(null, () => {return});