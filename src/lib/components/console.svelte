<script lang="ts">
	import { base } from '$app/paths';
	import { sendMessageToServer } from '$lib/scripts/serverSocket';
	import { messages } from '$lib/stores/archipelago';
	import { showConsole } from '$lib/stores/digging-game';
	import { afterUpdate } from 'svelte';
	import { quadInOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let consoleList: HTMLSpanElement | null = null;
	let consoleInput = '';

	afterUpdate(() => {
		consoleList?.scroll({ top: consoleList.scrollHeight, behavior: 'smooth' });
	});

	function handleKeyDown(event: KeyboardEvent) {
		if (event.key !== 'Enter') {
			return;
		}

		sendMessageToServer(consoleInput);
	}
</script>

<section transition:fly={{ duration: 1000, easing: quadInOut, x: -400 }}>
	<button class="close-console" on:click={() => showConsole.set(false)}>
		<img alt="close-console" src={base + '/cross.png'} />
	</button>
	<span class="console" bind:this={consoleList}>
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
	<input
		class="console-input"
		type="text"
		placeholder="Message or !command to send to server"
		bind:value={consoleInput}
		on:keydown={handleKeyDown}
	/>
</section>

<style>
	/* your styles go here */

	section {
		position: relative;
		height: 70vh;
		width: 100%;
		display: block;
		flex: 0 1 auto;
		margin-right: 1rem;
	}

	.console {
		border: 10px solid transparent;
		border-image-source: url('/borders/message-box-small.png');
		border-image-slice: 30% fill;
		border-image-repeat: repeat;
		display: flex;
		flex-direction: column;
		width: 100%;
		min-height: 45rem;
		max-height: 45rem;
		overflow: scroll;
		padding: 2px;
		white-space: pre-wrap;
		color: white;
	}

	.console-input {
		background-color: transparent;
		border: 10px solid transparent;
		border-image-source: url('/borders/input-box-small.png');
		border-image-slice: 30% fill;
		border-image-repeat: repeat;
		display: block;
		width: 100%;
		color: white;
		outline: none;
	}

	.close-console {
		position: absolute;
		right: 10px;
		top: 10px;
		border: none;
		background-color: transparent;
	}
</style>
