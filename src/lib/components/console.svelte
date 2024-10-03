<script lang="ts">
	import { messages } from '$lib/stores/archipelago';
	import { sendMessageToServer } from '$lib/scripts/serverSocket';
	import { fly } from 'svelte/transition';
	import type { Part, SegmentedMessage } from '$lib/types';

	let consoleInput = '';

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key !== 'Enter') {
			return;
		}

		sendMessageToServer(consoleInput);
	}
</script>

<section>
	<span id="console">
		{#each $messages as message}
			{#if Object.hasOwn(message, 'messageParts')}
				{#each message?.messageParts && message.messageParts as { text, type }}
					<p in:fly|global={{ y: 1200, duration: 1000 }}>{text}</p>
				{/each}
			{:else if Object.hasOwn(message, 'text')}
				<p in:fly|global={{ y: 1200, duration: 1000 }}>{message.text}</p>
			{:else}
				<p in:fly|global={{ y: 1200, duration: 1000 }}>{message}</p>
			{/if}
		{/each}
	</span>
	<input class="console-input" type="text" bind:value={consoleInput} on:keydown={handleKeyDown} />
</section>

<style>
	/* your styles go here */

	section {
		background:
			url('https://archipelago.gg/static/static/backgrounds/cliffs/grass/cliff-top.png') top
				repeat-x,
			url('https://archipelago.gg/static/static/backgrounds/grass.png') repeat;
		background-size:
			20px 71px,
			525px 525px;
		width: 100vw;
		display: block;
		flex: 0 1 auto;
		margin-top: 20px;
		padding-top: 75px;
	}

	#console {
		display: block;
		min-height: 17vh;
		max-height: 17vh;
		overflow: scroll;
		padding: 0px 10px;
		white-space: pre-wrap;
	}

	.console-input {
		width: 100vw;
	}
</style>
