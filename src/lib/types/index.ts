export interface SegmentedMessage {
  messageParts: MessagePart;
}

export interface MessagePart {
  text: string;
  type?: string;
  player?: number;
  flags?: number;
}

export interface Player {
  team: number;
  slot: number;
  alias: string;
  name: string;
}

export class Tile {
  isBomb: boolean = false;
  adjacentBombs: number = 0;
  clicked: boolean = false;
  flagged: boolean = false;
}

export interface APItem {
  item: number;
  location: number;
  player: number;
  flags: number;
  class: string;
}

export interface APReverseLookupList {
  [identifier: number]: string
}

export interface APLookupList {
  [identifier: string]: number
}

export interface APGame {
  item_name_to_id: APLookupList,
  location_name_to_id: APLookupList
}

export interface APGames {
  [gameName: string]: APGame
}

export interface APDataPackage {
  games: APGames;
}
