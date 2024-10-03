<script>
	// your script goes here

	import DiggingGame from './digging-area.svelte';
</script>

<section>
	<DiggingGame />
</section>

<style>
	/* your styles go here */
	section {
		max-width: min(940px, 100vw);
		margin-left: auto;
		margin-right: auto;
		display: flex;
		flex: 1 1 auto;
		width: 100%;
		user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		-webkit-touch-user-select: none;
		-moz-user-select: none;
		-khtml-user-select: none;
	}
</style>
