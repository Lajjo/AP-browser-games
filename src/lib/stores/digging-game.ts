import type { Tile } from "$lib/types";
import { derived, writable, type Writable } from "svelte/store";
import { checkedLocations, missingLocations } from "./archipelago";

export const bombsStore = writable(5);
export const boardWidthStore = writable(5);
export const boardHeightStore = writable(5);

export let currentRowsStore = writable(5);
export let currentColumnsStore = writable(5);
export let currentBombsStore = writable(5);
export let placedBombsStore = writable(0);
export let playingStore = writable(false);
export let gridStore: Writable<Array<Array<Tile>>> = writable([]);

export let checkedStore = derived([checkedLocations], ([$checkedLocations]) => $checkedLocations.length);
export let missingStore = derived([missingLocations], ([$missingLocations]) => $missingLocations.length);


export const availableChecksStore = derived([checkedStore, missingStore, currentBombsStore, currentColumnsStore, currentRowsStore], ([$checkedStore, $missingStore, $currentBombsStore, $currentColumnsStore, $currentRowsStore]) => {
  return Math.max(
    Math.min(
      $currentBombsStore +
      $currentRowsStore +
      $currentColumnsStore -
      10 -
      $checkedStore,
      $missingStore
    ),
    0
  )
});

export const tilesStore = derived([gridStore], ([$gridStore]) => $gridStore.flatMap((v) => v));
export const flaggedSpotsStore = derived([tilesStore], ([$tilesStore]) => $tilesStore.filter((spot: Tile) => spot.flagged).length);
export const undugSpotsStore = derived([currentColumnsStore, currentRowsStore, tilesStore], ([$currentColumnsStore, $currentRowsStore, $tilesStore]) => $currentColumnsStore * $currentRowsStore - $tilesStore.filter((spot: Tile) => spot.clicked).length);
export const hasWonStore = derived([placedBombsStore, undugSpotsStore, tilesStore], ([$placedBombsStore, $undugSpotStore, $tilesStore]) => $placedBombsStore === $undugSpotStore && !$tilesStore.some((t) => t.clicked && t.isBomb));

export const showConsole = writable(false);
export const showSettings = writable(false);
