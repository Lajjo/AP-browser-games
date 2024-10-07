<script lang="ts">
	// your script goes here
	import { connectToServer } from '$lib/scripts/serverSocket.ts';
	import {
		lastServerAddress,
		playerSlot,
		preventReconnect,
		serverSocket,
		serverStatus
	} from '$lib/stores/archipelago';

	import { get } from 'svelte/store';

	let serverAddress = get(lastServerAddress);
	let playerName = get(playerSlot);
	let password = '';

	async function handleConnect(event: MouseEvent) {
		// If the input value is empty, do not attempt to reconnect
		if (!serverAddress) {
			$preventReconnect = true;
			$lastServerAddress = null;

			// If the socket is open, close it
			if ($serverSocket && $serverSocket.readyState === WebSocket.OPEN) {
				$serverSocket.close();
				$serverSocket = null;
			}

			// If the user did not specify a server address, do not attempt to connect
			return;
		}

		// User specified a server. Attempt to connect
		await connectToServer(serverAddress, playerName, password);
	}
</script>

<section>
	<h1>Digging Game</h1>
	{#if $serverStatus !== 'Connected'}
		<form>
			<div>
				<label for="address">Server address:</label>
				<input name="address" id="server-address" bind:value={serverAddress} />
			</div>
			<div>
				<label for="player">Player name:</label>
				<input name="player" id="player" bind:value={playerName} />
			</div>
			<div>
				<label for="password">Password:</label>
				<input name="password" id="password" bind:value={password} />
			</div>
			<button on:click={handleConnect}>{serverSocket ? 'Connect' : 'Disconnect'}</button>
		</form>
	{/if}
</section>

<style>
	/* your styles go here */

	@font-face {
		font-family: 'Hylia Serif';
		font-style: normal;
		font-weight: 100;
		src: url('/fonts/HyliaSerifBeta-Regular.otf');
	}
	* {
		font-family: 'Hylia Serif';
	}
	section {
		display: flex;
		justify-content: space-between;
		padding-bottom: 30px;
		align-items: center;
		margin-bottom: 20px;
		width: 100vw;
		flex: 0 1 auto;
		background-image: url('https://archipelago.gg/static/static/backgrounds/header/ocean-header.png');
		background-repeat: repeat-x;
		background-size: auto 90px;
	}
	h1 {
		margin-left: 1rem;
	}
	form {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 1rem;
		margin-right: 1rem;
	}

	div {
		display: flex;
		flex-direction: column;
	}
</style>
