export interface SegmentedMessage {
  messageParts: Part;
}

export interface Part {
  type: string;
  text: string;
}

export class Tile {
  isBomb: boolean = false;
  adjacentBombs: number = 0;
  clicked: boolean = false;
  flagged: boolean = false;
}
