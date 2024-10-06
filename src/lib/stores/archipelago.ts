import type { APLookupList, APReverseLookupList } from "$lib/types";
import { readable, writable } from "svelte/store";

export const ARCHIPELAGO_PROTOCOL_VERSION = readable({
  major: 0,
  minor: 5,
  build: 0,
  class: 'Version',
});

export const permissionMap = readable({
  0: 'Disabled',
  1: 'Enabled',
  2: 'Goal',
  6: 'Auto',
  7: 'Enabled + Auto',
});

// Players in the current game, received from Connected server packet
export const slotName = writable<string | null>(null);
export const playerSlot = writable(null);
export const playerTeam = writable(null);
export const players = writable([]);
export const hintCost = writable(null);

// Location and item maps, populated from localStorage
export const apItemsById = writable<APReverseLookupList>({});
export const apLocationsById = writable<APReverseLookupList>({});
export const apLocationsByName = writable<APLookupList>({});

// Tracks if auto-scrolling is currently paused
export const autoScrollPaused = writable(false);

// Tracks the number of items which should be sent immediately
export const immediateItems = writable(0);

export const useMarquee = writable(false);


// Archipelago server
export const DEFAULT_SERVER_PORT = readable(38281);
export const serverSocket = writable<WebSocket | null>(null);
export const serverAuthError = writable(false);
export const serverPassword = writable<string | null>(null);

export const itemsReceived = writable([]);

// Track reconnection attempts
export const maxReconnectAttempts = readable(10);
export const preventReconnect = writable(false);
export const reconnectAttempts = writable(0);
export const reconnectTimeout = writable<number | null>(null);
export const lastServerAddress = writable(null);

// Location Ids provided by the server
export const checkedLocations = writable<Array<number>>([]);
export const missingLocations = writable<Array<number>>([]);

export const gameComplete = writable(false);
export const CLIENT_STATUS = readable({
  CLIENT_UNKNOWN: 0,
  CLIENT_READY: 10,
  CLIENT_PLAYING: 20,
  CLIENT_GOAL: 30,
});

export const messages = writable<any>([]);
