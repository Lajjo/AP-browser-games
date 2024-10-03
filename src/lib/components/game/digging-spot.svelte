<script lang="ts">
	import Bomb from '$lib/assets/bomb.svelte';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let clicked = false;
	export let flagged = false;
	export let isBomb = false;
	export let adjacentBombs = 0;

	function handleClick(event: MouseEvent) {
		dispatch('tile-clicked', event.button);
	}
	// your script goes here
</script>

<td class={clicked ? 'dug' : flagged ? 'flag' : ''} on:mousedown={(e) => handleClick(e)}>
	{#if clicked}
		{#if isBomb === true}
			<img alt="bomb" src="/bomb-large.png" />
		{:else if adjacentBombs > 0}
			{adjacentBombs}
		{/if}
	{/if}
</td>

<style>
	/* your styles go here */
	td {
		border: 3px dashed green;
		flex: 1 1 auto;
		width: 100%;
		height: 100%;

		text-align: center;
		display: grid;
		justify-items: center;
		align-items: center;
		aspect-ratio: 1;

		font-size: clamp(16px, 5vw, 50px);
	}
	.dug {
		background: url('/Spotdug.png') no-repeat center/100%;
	}
	.flag {
		background: url('/Heavy Rock.png') no-repeat center/100%;
	}
</style>
