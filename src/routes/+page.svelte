<script>
	// your script goes here
	import { onMount } from 'svelte';

	import Header from '$lib/components/header.svelte';
	import Game from '$lib/components/game/game.svelte';
	import Console from '$lib/components/console.svelte';
	import { fade, fly, slide } from 'svelte/transition';
	import { base } from '$app/paths';
	import { showConsole, showSettings } from '$lib/stores/digging-game';
	import { quadInOut } from 'svelte/easing';
	import Option from '$lib/components/game/option.svelte';

	onMount(() => {
		document.addEventListener('contextmenu', (e) => e.preventDefault());
	});
</script>

<main>
	<Header />
	<div class="content-area" transition:slide>
		{#if $showConsole}
			<Console />
		{/if}
		<Game />
	</div>
	{#if $showSettings}
		<Option />
	{/if}
	{#if !$showConsole}
		<button
			transition:fade={{ duration: 1000, easing: quadInOut }}
			class={'floating-chat__open-chat--closed'}
			on:click={() => showConsole.set(true)}
		>
			<img alt="console" src={base + '/map.png'} />
		</button>
	{/if}
</main>

<style>
	@font-face {
		font-family: 'Return of Ganon';
		font-style: normal;
		font-weight: 200;
		src: url('/fonts/ReturnofGanon.ttf');
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		max-width: 100vw;
		min-width: 100vw;
	}

	.content-area {
		display: flex;
		flex-direction: row;
		transition: all 1000s ease-in-out;
		max-width: 100vw;
		min-width: 100vw;
	}

	.floating-chat__open-chat--closed {
		position: -webkit-sticky;
		position: fixed;
		top: 12rem;
		left: 0;
		z-index: 4;
		aspect-ratio: 1;
		background-color: transparent;
		border: 10px solid transparent;
		border-image-source: url('/borders/message-box-small.png');
		border-image-slice: 30% fill;
		border-image-repeat: repeat;
		transition: all 500ms ease;
	}

	img {
		padding: 5px;
	}

	:global(body) {
		display: flex;
		justify-content: center;
		margin: 0;
		background-image: url(https://archipelago.gg/static/static/backgrounds/ocean.png);
		background-repeat: repeat;
		background-size: 250px 250px;
	}
	:global(*) {
		font-family: 'Return of Ganon';
		box-sizing: border-box;
	}
</style>
