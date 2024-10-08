<script lang="ts">
	// your script goes here

	import { base } from '$app/paths';
	import { getNewBoard } from '$lib/scripts/digging-game.svelte';
	import {
		availableChecksStore,
		boardHeightStore,
		boardWidthStore,
		bombsStore,
		currentBombsStore,
		currentColumnsStore,
		currentRowsStore,
		flaggedSpotsStore,
		playingStore,
		showConsole
	} from '$lib/stores/digging-game';
	import { fly } from 'svelte/transition';
	import DiggingArea from './digging-area.svelte';
	import { serverStatus } from '$lib/stores/archipelago';

	$: $bombsStore, $boardWidthStore, $boardHeightStore, $playingStore, getNewBoard();
</script>

<section class={$showConsole ? 'section-split' : ''}>
	<div class="island">
		<div class="game-status">
			<img alt="available checks" src={base + '/ap-icon-large.png'} />
			<span>
				{$availableChecksStore}
			</span>
			<img alt="placed bombs" src={base + '/bomb-large.png'} />
			<span>
				{$currentBombsStore}
				{#if $serverStatus === 'Connected'}
					<hr />
					20
				{/if}
			</span>
			<img alt="map height" src={base + '/up-down-arrow-big.png'} />
			<span>
				{$currentRowsStore}
				{#if $serverStatus === 'Connected'}
					<hr />
					10
				{/if}
			</span>
			<img alt="map width" src={base + '/left-right-arrow-big.png'} />
			<span>
				{$currentColumnsStore}
				{#if $serverStatus === 'Connected'}
					<hr />
					10
				{/if}
			</span>
			<img alt="flagged spots" src={base + '/heavy-rock-big.png'} />
			<span>
				{$flaggedSpotsStore}
				<hr />
				{$currentBombsStore}
			</span>
		</div>
		<DiggingArea />
	</div>
</section>

<style>
	/* your styles go here */
	section {
		max-width: min(940px, 100vw);
		margin-left: auto;
		margin-right: auto;
		display: flex;
		justify-content: space-between;
		justify-self: center;
		flex: 1;
		width: 100%;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		-webkit-touch-user-select: none;
		-moz-user-select: none;
		-khtml-user-select: none;
		transition: all 1000ms ease;
	}

	.section-split {
		margin-left: 1rem;
	}

	.island {
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

	.game-status {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.game-status > span {
		font-size: clamp(16px, 5vw, 35px);
		margin: 0px 10px;
	}

	img {
		aspect-ratio: 1;
		height: clamp(16px, 20%, 80px);
	}

	hr {
		margin: 0px;
	}
</style>
