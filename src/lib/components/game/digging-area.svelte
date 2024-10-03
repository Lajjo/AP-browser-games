<script lang="ts">
	// your script goes here
	import { sendGoalComplete, sendLocationCheck } from '$lib/scripts/serverSocket';
	import { checkedLocations, missingLocations } from '$lib/stores/archipelago';
	import { bombs, boardHeight, boardWidth } from '$lib/stores/digging-game';
	import { Tile } from '$lib/types';
	import { onMount, tick } from 'svelte';
	import CheckerTile from './digging-spot.svelte';

	let serverRows = 5;
	let currentRows = 5;
	let serverColumns = 5;
	let currentColumns = 5;
	let serverBombs = 5;
	let currentBombs = 5;
	let placedBombs = 0;
	let playing = false;
	let grid: Array<Array<Tile>> = [];
	let availableChecks = 0;

	onMount(getNewBoard);

	$: $bombs,
		$boardHeight,
		$boardWidth,
		$checkedLocations,
		(availableChecks = Math.min(
			$bombs + $boardHeight + $boardWidth - 10 - $checkedLocations.length,
			$missingLocations.length
		));

	bombs.subscribe((value) => (serverBombs = value));
	boardHeight.subscribe((value) => (serverRows = value));
	boardWidth.subscribe((value) => (serverColumns = value));

	$: tiles = grid.flatMap((v) => v);
	$: flaggedSpots = tiles.filter((spot: Tile) => spot.flagged).length;
	$: unclickedSpots =
		currentColumns * currentRows - tiles.filter((spot: Tile) => spot.clicked).length;
	$: win = placedBombs === unclickedSpots && !tiles.some((t) => t.clicked && t.isBomb);

	$: check(win);
	$: serverBombs, serverColumns, serverRows, playing, getNewBoard();

	function check(win: boolean) {
		if (win) {
			if (availableChecks > 0) {
				sendLocationCheck(81000 + $checkedLocations.length);
			} else {
				sendGoalComplete();
			}
		}
	}

	function increaseConnectedBombs(x: number, y: number) {
		if (0 <= x && x < currentColumns && 0 <= y && y < currentRows && grid[y][x].isBomb !== true)
			(grid[y][x] as Tile).adjacentBombs += 1;
	}

	function handleClick(x: number, y: number, mouseButton: number) {
		if (mouseButton === 0) digSpot(x, y, false);
		if (mouseButton === 2) flagSpot(x, y);
	}

	function flagSpot(x: number, y: number) {
		if (0 <= x && x < currentColumns && 0 <= y && y < currentRows && !grid[y][x].clicked) {
			let tile = grid[y][x] as Tile;
			tile.flagged = !tile.flagged;
			grid[y][x] = tile;
		}
	}

	async function digSpot(x: number, y: number, autoDig = true) {
		if (
			0 <= x &&
			x < currentColumns &&
			0 <= y &&
			y < currentRows &&
			!grid[y][x].clicked &&
			!grid[y][x].flagged
		) {
			let tile = grid[y][x] as Tile;
			tile.clicked = true;

			if (placedBombs === 0) {
				playing = true;
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
				setTimeout(() => {
					playing = false;
					getNewBoard();
				}, 2500);
			}
			grid[y][x] = tile;
		}
		await tick();
		if (win) {
			showBoard();
			setTimeout(() => {
				playing = false;
				getNewBoard();
			}, 2500);
		}
	}

	function spawnBomb() {}

	function showBoard() {
		grid.forEach((column, y) => {
			column.forEach((tile, x) => {
				tile.clicked = true;
				grid[y][x] = tile;
			});
		});
	}

	function getNewBoard() {
		if (!playing) {
			placedBombs = 0;

			currentBombs = serverBombs;
			currentColumns = serverColumns;
			currentRows = serverRows;

			grid = Array.from({ length: currentRows }, () =>
				Array.from({ length: currentColumns }, () => new Tile())
			);
		}
	}

	function adjacentToStart(startTile: any, x: number, y: number) {
		return (
			startTile.x >= x - 1 && startTile.x <= x + 1 && startTile.y >= y - 1 && startTile.y <= y + 1
		);
	}

	function placeBombs(startTile: any) {
		while (placedBombs < currentBombs) {
			const x = Math.round(Math.random() * currentColumns * currentBombs) % currentColumns;
			const y = Math.round(Math.random() * currentRows * currentBombs) % currentRows;
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
				placedBombs++;
			}
		}
	}
</script>

<table>
	<img alt="available checks" src="/icon.ico" />{availableChecks}
	<img alt="placed bombs" src="/bomb-small.png" />{currentBombs}/20
	<img alt="map height" src="/up-down-arrow.png" />{currentRows}/10
	<img alt="map width" src="/left-right-arrow.png" />{currentColumns}/10
	<img alt="flagged spots" src="/heavy-rock-small.png" />{flaggedSpots}/{currentBombs}
	<tbody class="grid">
		{#each grid as row, y}
			<!-- content here -->
			<tr class="rows">
				{#each row as col, x}
					<!-- content here -->
					<CheckerTile
						on:tile-clicked={(b) => handleClick(x, y, b.detail)}
						clicked={grid[y][x].clicked}
						flagged={grid[y][x].flagged}
						isBomb={grid[y][x].isBomb}
						adjacentBombs={grid[y][x].adjacentBombs}
					/>
				{/each}
			</tr>
		{/each}
	</tbody>
	{#if win}
		WINNER
	{/if}
</table>

<style>
	table {
		width: 100%;
		background:
			url('https://archipelago.gg/static/static/backgrounds/cliffs/grass/cliff-top-left-corner.png')
				top left no-repeat,
			url('https://archipelago.gg/static/static/backgrounds/cliffs/grass/cliff-top-right-corner.png')
				top right no-repeat,
			url('https://archipelago.gg/static/static/backgrounds/cliffs/grass/cliff-bottom-left-corner.png')
				bottom left no-repeat,
			url('https://archipelago.gg/static/static/backgrounds/cliffs/grass/cliff-bottom-right-corner.png')
				bottom right no-repeat,
			url('https://archipelago.gg/static/static/backgrounds/cliffs/grass/cliff-top.png') top
				repeat-x,
			url('https://archipelago.gg/static/static/backgrounds/cliffs/grass/cliff-bottom.png') bottom
				repeat-x,
			url('https://archipelago.gg/static/static/backgrounds/cliffs/grass/cliff-left.png') left
				repeat-y,
			url('https://archipelago.gg/static/static/backgrounds/cliffs/grass/cliff-right.png') right
				repeat-y,
			url('https://archipelago.gg/static/static/backgrounds/grass.png') repeat;
		background-size:
			140px 120px,
			140px 120px,
			140px 140px,
			140px 140px,
			20px 71px,
			20px 100px,
			71px 20px,
			71px 20px,
			525px 525px;
		padding: 90px 90px 120px 90px;
		height: fit-content;

		cursor:
			url('/cursor/Shovel-52.png') 0 52,
			auto;
	}

	.grid {
		display: flex;
		flex-direction: column;
		border-radius: 2rem;
		/*max-height: 60rem;*/
		/*max-width: 60rem;*/
		width: 100%;
	}

	.rows {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		flex-basis: 1 1 1fr;
	}

	/* your styles go here */
</style>
