import { writable } from "svelte/store";

export const bombs = writable(5);
export const boardWidth = writable(5);
export const boardHeight = writable(5);
