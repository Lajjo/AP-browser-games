import type { MessagePart, Player, SegmentedMessage } from "$lib/types";
import { checkedLocations, itemsReceived, maxReconnectAttempts, messages, missingLocations, playerSlot, playerTeam, players, reconnectAttempts, serverSocket } from "$lib/stores/archipelago";

export let checkedLocationsValue: number[] = [], missingLocationsValue: number[] = [], playerSlotValue: number[] | null = null, playerTeamValue: number[] | null = null, playersValue: Player[] = [], reconnectAttemptsValue: number = 0, maxReconnectAttemptsValue: number = 10, serverSocketValue: WebSocket | null = null, messagesValue: Array<SegmentedMessage | MessagePart> = [], itemsReceivedValue: Array<number> = [];

checkedLocations.subscribe((value) => checkedLocationsValue = value);
missingLocations.subscribe((value) => missingLocationsValue = value);
playerSlot.subscribe((value) => playerSlotValue = value);
playerTeam.subscribe((value) => playerTeamValue = value);
players.subscribe((value) => playersValue = value);
reconnectAttempts.subscribe((value) => reconnectAttemptsValue = value);
serverSocket.subscribe((value) => serverSocketValue = value);
messages.subscribe((value) => messagesValue = value);
itemsReceived.subscribe(value => itemsReceivedValue = value)
maxReconnectAttempts.subscribe(value => maxReconnectAttemptsValue = value)
