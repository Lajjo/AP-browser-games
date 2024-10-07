import { availableChecksStore, boardHeightStore, boardWidthStore, bombsStore, checkedStore, currentBombsStore, currentColumnsStore, currentRowsStore, gridStore, hasWonStore, missingStore, placedBombsStore, playingStore, tilesStore } from "$lib/stores/digging-game";
import { Tile } from "$lib/types";
import { get } from "svelte/store";
import { sendDeathLink, sendGoalComplete, sendLocationCheck } from "./serverSocket";



export function check(win: boolean) {
  if (win) {
    const checked = get(checkedStore);
    if (get(availableChecksStore)) {
      sendLocationCheck(81000 + checked);
    } else if (get(hasWonStore)) {
      sendGoalComplete();
    }
  }
}

export function increaseConnectedBombs(x: number, y: number) {
  const grid = get(gridStore);
  if (0 <= x && x < get(currentColumnsStore) && 0 <= y && y < get(currentRowsStore) && grid[y][x].isBomb !== true)
    (grid[y][x] as Tile).adjacentBombs += 1;
}

export function handleClick(x: number, y: number, mouseButton: number) {
  if (mouseButton === 0) digSpot(x, y, false);
  if (mouseButton === 2) flagSpot(x, y);
  gridStore.update((g) => g)
}

export function flagSpot(x: number, y: number) {
  const grid = get(gridStore);
  if (0 <= x && x < get(currentColumnsStore) && 0 <= y && y < get(currentRowsStore) && !grid[y][x].clicked) {
    let tile = grid[y][x] as Tile;
    tile.flagged = !tile.flagged;
    grid[y][x] = tile;
  }
}

export async function digSpot(x: number, y: number, autoDig = true) {
  const grid = get(gridStore);
  if (
    0 <= x &&
    x < get(currentColumnsStore) &&
    0 <= y &&
    y < get(currentRowsStore) &&
    !grid[y][x].clicked &&
    !grid[y][x].flagged
  ) {
    let tile = grid[y][x] as Tile;
    tile.clicked = true;

    if (get(placedBombsStore) === 0) {
      playingStore.set(true);
      placeBombs({ x, y });
    }

    if (!tile.isBomb && tile.adjacentBombs == 0) {
      digSpot(x - 1, y - 1);
      digSpot(x, y - 1);
      digSpot(x + 1, y - 1);
      digSpot(x - 1, y);
      digSpot(x + 1, y);
      digSpot(x - 1, y + 1);
      digSpot(x, y + 1);
      digSpot(x + 1, y + 1);
    }
    if (tile.isBomb) {
      showBoard();
      sendDeathLink();
      setTimeout(() => {
        playingStore.set(false);
        getNewBoard();
      }, 2500);
    }
    grid[y][x] = tile;
  }
  if (get(hasWonStore)) {
    showBoard();
    check(true);
    setTimeout(() => {
      playingStore.set(false);
      getNewBoard();
    }, 2500);
  }
}

export function spawnBomb() { }

export function showBoard() {
  const grid = get(gridStore)
  grid.forEach((column, y) => {
    column.forEach((tile, x) => {
      tile.clicked = true;
      grid[y][x] = tile;
    });
  });
}

export function getNewBoard() {
  if (!get(playingStore)) {
    placedBombsStore.set(0);

    const bomb = get(bombsStore);
    const columns = get(boardWidthStore);
    const rows = get(boardHeightStore);
    currentBombsStore.set(bomb);
    currentColumnsStore.set(columns);
    currentRowsStore.set(rows);

    gridStore.set(Array.from({ length: rows }, () =>
      Array.from({ length: columns }, () => new Tile())
    ));
  }
}

export function adjacentToStart(startTile: any, x: number, y: number) {
  return (
    startTile.x >= x - 1 && startTile.x <= x + 1 && startTile.y >= y - 1 && startTile.y <= y + 1
  );
}

export function placeBombs(startTile: any) {
  const bombs = get(bombsStore);
  const columns = get(boardWidthStore);
  const rows = get(boardHeightStore);
  const grid = get(gridStore);
  while (get(placedBombsStore) < get(currentBombsStore)) {
    const x = Math.round(Math.random() * columns * bombs) % columns;
    const y = Math.round(Math.random() * rows * bombs) % rows;
    if (adjacentToStart(startTile, x, y)) continue;
    const tile = grid[y][x];

    if (tile.isBomb !== true) {
      increaseConnectedBombs(x - 1, y - 1);
      increaseConnectedBombs(x, y - 1);
      increaseConnectedBombs(x + 1, y - 1);
      increaseConnectedBombs(x - 1, y);
      tile.isBomb = true;
      increaseConnectedBombs(x + 1, y);
      increaseConnectedBombs(x - 1, y + 1);
      increaseConnectedBombs(x, y + 1);
      increaseConnectedBombs(x + 1, y + 1);
      placedBombsStore.update((pb) => pb + 1);
    }
  }
}

export function deathLinked() {
  showBoard();
  setTimeout(() => {
    playingStore.set(false);
    getNewBoard();
  }, 2500);
  gridStore.update((g) => g)
}


