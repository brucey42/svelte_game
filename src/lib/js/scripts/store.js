import { writable } from "svelte/store";

export const musicStore = writable(null);
export const playState = writable(null);
export const spareText = writable(`Click to Start`);