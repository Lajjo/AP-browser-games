<script lang="ts">
	// your script goes here
	import { handleClick } from '$lib/scripts/digging-game.svelte';
	import { gridStore } from '$lib/stores/digging-game';
	import CheckerTile from './digging-spot.svelte';
</script>

<table>
	<tbody class="grid">
		{#each $gridStore as row, y}
			<!-- content here -->
			<tr class="rows">
				{#each row as col, x}
					<!-- content here -->
					<CheckerTile
						on:tile-clicked={(b) => handleClick(x, y, b.detail)}
						clicked={$gridStore[y][x].clicked}
						flagged={$gridStore[y][x].flagged}
						isBomb={$gridStore[y][x].isBomb}
						adjacentBombs={$gridStore[y][x].adjacentBombs}
					/>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
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
