<script>
	// your script goes here
	import { onMount } from 'svelte';

	import Header from '$lib/components/header.svelte';
	import Game from '$lib/components/game/game.svelte';
	import Console from '$lib/components/console.svelte';

	onMount(() => {
		document.addEventListener('contextmenu', (e) => e.preventDefault());
	});
</script>

<main>
	<Header />
	<Game />
	<Console />
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
