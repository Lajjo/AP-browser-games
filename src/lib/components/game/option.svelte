<script>
	import { base } from '$app/paths';
	import { assistingHandStore, deathLinkStore, serverStatus } from '$lib/stores/archipelago';
	import {
		boardHeightStore,
		boardWidthStore,
		bombsStore,
		showSettings
	} from '$lib/stores/digging-game';
	import { fade, fly } from 'svelte/transition';
</script>

<div class="overlay" transition:fade>
	<div class="options" transition:fly={{ x: 200, delay: 200, duration: 500 }}>
		<button class="close-console" on:click={() => showSettings.set(false)}>
			<img alt="close-console" src={base + '/cross.png'} />
		</button>
		{#if $serverStatus === 'Connected'}
			<form id="archipelago">
				<label for="deathLink"
					>Death Link:
					<input type="checkbox" name="deathLink" bind:checked={$deathLinkStore} />
				</label>
				<label for="assistingHand"
					>Assisting Hand:
					<input type="checkbox" name="assistingHand" bind:checked={$assistingHandStore} disabled />
				</label>
			</form>
		{:else}
			<form id="offline">
				<label for="bombs"
					>Bombs:
					<input type="number" name="bombs" bind:value={$bombsStore} />
				</label>
				<label for="height"
					>Height:
					<input type="number" name="height" bind:value={$boardHeightStore} />
				</label>
				<label for="width"
					>Width:
					<input type="number" name="width" bind:value={$boardWidthStore} />
				</label>
			</form>
		{/if}
	</div>
</div>

<style>
	.overlay {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.25);
		z-index: 5;
	}
	.options {
		border: 10px solid transparent;
		border-image-source: url('/borders/message-box-small.png');
		border-image-slice: 30% fill;
		border-image-repeat: repeat;
		position: fixed;
		top: 25%;
		right: 0;
		color: white;
		width: 20rem;
		padding: 2rem 1rem;
	}
	.close-console {
		position: absolute;
		right: 10px;
		top: 10px;
		border: none;
		background-color: transparent;
	}
	form {
		display: flex;
		flex-direction: column;
	}
</style>
